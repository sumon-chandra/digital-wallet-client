import type { IUser } from "@/interfaces/users";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type TAuthState = {
	user: null | IUser;
	accessToken: null | string;
};

const initialState: TAuthState = {
	user: null,
	accessToken: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.accessToken = accessToken;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
		},
	},
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.user;
