import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthBoxOpen, setIsAuthBoxOpen] = useState(false);

    const openAuthBox = () => setIsAuthBoxOpen(true);
    const closeAuthBox = () => setIsAuthBoxOpen(false);
    const toggleAuthBox = () => setIsAuthBoxOpen(prev => !prev);

    return (
        <AuthContext.Provider value={{ isAuthBoxOpen, openAuthBox, closeAuthBox, toggleAuthBox }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
