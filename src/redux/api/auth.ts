import type { IUser } from "@/interfaces/users";
import { baseApi } from "../base-api";
import type { SuccessResponse } from "@/interfaces/api-response";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<SuccessResponse<IUser>, Partial<IUser>>({
			query: (payload) => ({
				url: "auth/login",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["AUTH"],
		}),
		logout: builder.mutation({
			query: () => ({
				url: "auth/logout",
				method: "POST",
			}),
			invalidatesTags: ["AUTH"],
		}),
	}),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
