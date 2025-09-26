import { useCurrentToken } from "@/redux/features/auth-slice";
import { useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verify-token";

interface JWTPayload {
	userId: string;
	email: string;
	role: string;
	name: string;
}

export const useAuth = () => {
	const token = useAppSelector(useCurrentToken);

	if (!token) {
		return {
			isAuthenticated: false,
			role: null,
			user: null,
		};
	}

	const decoded = verifyToken(token) as JWTPayload;

	if (!decoded) {
		return {
			isAuthenticated: false,
			role: null,
			user: null,
		};
	}

	return {
		isAuthenticated: true,
		role: decoded.role,
		user: decoded,
	};
};

export type AuthContext = ReturnType<typeof useAuth>;
