import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/Auth'
import { SigninCard } from "./components/SigninCard";
import { SignupCard } from "./components/SignupCard";
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
                <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default App
