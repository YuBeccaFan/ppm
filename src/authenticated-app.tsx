import ProjectListScreen from "components/projectList";
import React from "react";
import { logout } from './auth-provider';
import { useAuth } from "context/auth-context";

export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <button onClick={logout}>Logout</button>
        <ProjectListScreen />
    </div>
}