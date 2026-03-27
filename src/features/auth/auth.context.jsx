import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Start loading=true so <Protected> waits before redirecting
    const [loading, setLoading] = useState(true);

    // Rehydrate auth session on every page load / refresh
    useEffect(() => {
        (async () => {
            try {
                const response = await getMe();
                setUser(response?.user ?? null);
            } catch {
                // Cookie expired or not present — stay logged out
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
