/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from "@/constants";
import type { ErrorResponse } from "@/interfaces/api-response";
import {
	createApi,
	fetchBaseQuery,
	type DefinitionType,
	type BaseQueryApi,
	type BaseQueryFn,
	type FetchArgs,
	type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";
import { logout, setUser } from "./features/auth-slice";

export type CustomBaseQueryError = FetchBaseQueryError & { data?: ErrorResponse };

const baseQuery = fetchBaseQuery({
	baseUrl: BACKEND_BASE_URL,
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState)?.auth?.token;
		// console.log({ token });
		if (token) {
			headers.set("cookie", `accessToken=${token}`);
		}
		return headers;
	},
}) as BaseQueryFn<string | FetchArgs, unknown, CustomBaseQueryError>;

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
	let result = await baseQuery(args, api, extraOptions);

	const res = await fetch(`${BACKEND_BASE_URL}auth/refresh-token`, {
		method: "POST",
		credentials: "include",
	});
	const data = await res.json();

	if (data?.data?.accessToken) {
		const user = (api.getState() as RootState).auth.user;

		api.dispatch(
			setUser({
				user,
				token: data.data.accessToken,
			})
		);

		result = await baseQuery(args, api, extraOptions);
	} else {
		api.dispatch(logout());
	}

	return result;
};

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQueryWithRefreshToken,
	tagTypes: ["AUTH", "USERS", "WALLET", "TRANSACTION"],
	endpoints: () => ({}),
});
