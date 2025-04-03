import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

export const PortectedRoute = ({ children }) => {
    const { auth } = useAuth();

    if(auth.isLoading) {
        return <div>Loading...</div>
    }

    if(!auth.token) {
        return <Navigate to = "/auth/signin" />
    }

    return children;
}