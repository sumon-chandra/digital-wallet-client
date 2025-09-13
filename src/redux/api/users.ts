import type { IUser } from "@/interfaces/users";
import { baseApi } from "../base-api";
import type { SuccessResponse } from "@/interfaces/api-response";

// export const usersApi = createApi({
// 	reducerPath: "usersApi",
// 	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_BASE_URL }),
// 	endpoints: (builder) => ({
// 		getAllUsers: builder.query<IUser, string>({
// 			query: () => "users",
// 		}),
// 		signup: builder.mutation<IUser, Partial<IUser>>({
// 			query: (payload) => ({
// 				url: "users/register",
// 				method: "POST",
// 				body: payload,
// 			}),
// 		}),
// 	}),
// });

export const usersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => ({
				url: "users",
				method: "GET",
			}),
			providesTags: ["USERS"],
		}),
		signup: builder.mutation<SuccessResponse<IUser>, Partial<IUser>>({
			query: (payload) => ({
				url: "users/register",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["USERS"],
		}),
	}),
});

export const { useGetAllUsersQuery, useSignupMutation } = usersApi;
