import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { loginUser, logoutUser, registerUser, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { user, loading, setUser, setLoading } = context;

    const register = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const response = await registerUser({ username, email, password });
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const login = async ({ email, password }) => {
        setLoading(true);
        try {
            const response = await loginUser({ email, password });
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        setLoading(true);
        try {
            const response = await logoutUser();
            setUser(null);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const getUserInfo = async () => {
        setLoading(true);
        try {
            const response = await getMe()
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        user,
        loading,
        setUser,
        setLoading,
        register,
        login,
        logout,
        getUserInfo
    }
}