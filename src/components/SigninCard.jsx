import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button'
import { Separator } from "../components/ui/separator";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { useSignin } from "../hooks/apis/auth/useSignin";

export const SigninCard = () => {
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState(null);

    const { isPending, isSuccess, error, signinMutation } = useSignin();

    const [signInForm, setSigninForm] = useState({
        email: '',
        password: ''
    });
    
    async function handleSubmit(e) {
        e.preventDefault();

        if(!signInForm.email || !signInForm.password) {
            console.error('Fill all the fields');
            setValidationError({ message: 'Fill all the fields' })
            return;
        }

        setValidationError(null);
        
        await signinMutation({
            email: signInForm.email,
            password: signInForm.password
        })
    }

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign In to access your account</CardDescription>

                {validationError && (
                    <div className="bg-destructive/15 p-4 flex items-center gap-x-2 mb-6 text-sm text-destructive">
                        <TriangleAlert className="size-5" />
                        <p>{validationError.message}</p>
                    </div>
                )}

                {error && (
                    <div className="bg-destructive/15 p-4 flex items-center gap-x-2 mb-6 text-sm text-destructive">
                        <TriangleAlert className="size-5" />
                        <p>{error.message}</p>
                    </div>
                )}

                {isSuccess && (
                    <div className="bg-primary/15 p-3 rounded-md flex items-center text-sm text-primary mb-5 gap-x-2">
                        <FaCheck className="size-5" />
                        <p>Successfully signed up, redirecting to home page</p>
                        <LucideLoader2 className="animate-spin ml-2"/>
                    </div>
                )}

            </CardHeader>

            <CardContent>
                <form className='space-y-3' onSubmit={handleSubmit}>
                    <Input
                        placeholder="Email"
                        required
                        type="email"
                        onChange={(e) => setSigninForm({...signInForm, email: e.target.value})}
                    >
                    </Input>

                    <Input
                        placeholder="Password"
                        required
                        type="password"
                        onChange={(e) => setSigninForm({...signInForm, password: e.target.value})}
                    >

                    </Input>
                    <Button
                        disabled = {false}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                </form>
                <Separator className="my-5"/>
                <p className="text-s text-muted-foreground mt-4">
                    Create an account? {' '}
                    <span 
                        className="text-sky-900 hover:underline cursor-pointer"
                        onClick={() => navigate('/auth/signup')}
                    >
                        Sign Up
                    </span>
                </p>
            </CardContent>
        </Card>
    )
}