import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react";
import { refreshAccessToken } from "../apis/auth";

export const PortectedRoute = ({ children }) => {
    const { auth, setAuth } = useAuth();    
    const [isChecking, setIsChecking] = useState(true);

    const verfiyToken = async () => {
        const token = localStorage.getItem("access_token");
        const tokenExpiry = localStorage.getItem("token_expiry");

        if(!token || (tokenExpiry && Date.now() > tokenExpiry)) {
            console.log("Access token expired, trying to refresh");

            const newAccessToken = await refreshAccessToken();

            if(newAccessToken) {
                setAuth({ token: newAccessToken, isLoading: false });
                setIsChecking(false);
            }

            else {
                localStorage.removeItem("access_token");
                localStorage.removeItem("token_expiry");
                setAuth({ token: null, isLoading: false });
                setIsChecking(false);
            }
        }

        else {
            setIsChecking(false);
            setAuth({ token: token, isLoading: false });
        }
    }

    useEffect(() => {
        verfiyToken();
    }, [setAuth]);

    if(auth.isLoading || isChecking) {
        return <div>Loading...</div>;
    }

    if (!auth.token) {
        return <Navigate to="/auth/signin" />;
    }

    return children;
}