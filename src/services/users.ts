import { BACKEND_BASE_URL } from "@/constants";
import type { IUser } from "@/interfaces/users";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_BASE_URL }),
	endpoints: (builder) => ({
		getAllUsers: builder.query<IUser, string>({
			query: () => "users",
		}),
		signup: builder.mutation<IUser, Partial<IUser>>({
			query: (payload) => ({
				url: "users/register",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const { useGetAllUsersQuery, useSignupMutation } = usersApi;
