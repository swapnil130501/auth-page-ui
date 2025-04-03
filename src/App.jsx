import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/Auth'
import { SigninCard } from "./components/SigninCard";
import { SignupCard } from "./components/SignupCard";
import { NotFound } from './pages/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster'
import { AuthContextProvider } from './context/AuthContext';
import { PortectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <>
                    <Routes>
                        <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
                        <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />
                        <Route path="/home" element={<PortectedRoute><Home></Home></PortectedRoute>} />
                        <Route path="/*" element={<NotFound/>} />
                    </Routes>
                    <Toaster />
                </>
            </AuthContextProvider>
        </QueryClientProvider>
    )
}

export default App
