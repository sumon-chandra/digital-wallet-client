import { BACKEND_BASE_URL } from "@/constants";
import type { ErrorResponse } from "@/interfaces/api-response";
import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export type CustomBaseQueryError = FetchBaseQueryError & { data?: ErrorResponse };

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BACKEND_BASE_URL,
		credentials: "include",
	}) as BaseQueryFn<string | FetchArgs, unknown, CustomBaseQueryError>,
	tagTypes: ["AUTH", "USERS", "WALLET", "TRANSACTION"],
	endpoints: () => ({}),
});
