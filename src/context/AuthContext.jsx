import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        isLoading: true
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setAuth({
                token,
                isLoading: false
            });
        }

        else {
            setAuth({
                token: null,
                isLoading: false
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;