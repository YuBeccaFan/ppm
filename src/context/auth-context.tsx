import { User } from "components/projectList/searchPanel";
import React, { ReactNode } from "react";
import * as auth from "auth-provider";

interface AuthForm {
    username: string;
     password: string;
}
export const AuthContext = React.createContext<{
    user: User | null;
    login: (form: AuthForm) => Promise<void>;
    register: (form: AuthForm) => Promise<void>;
    logout: () => Promise<void>
} | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = React.useState<User| null>(null);
    const login = (form: AuthForm) => auth.login(form).then(setUser);
    const register  = (form: AuthForm) => auth.register(form).then(setUser);
    const logout = () => auth.logout().then(() => setUser(null))

    return <AuthContext.Provider children={children} value={{ user, login, register, logout} } />;
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth should be used in AuthProvider");
    }
    return context;
}