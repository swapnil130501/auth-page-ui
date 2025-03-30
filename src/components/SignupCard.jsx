import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button'
import { Separator } from "../components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/apis/auth/useSignup";
import { LucideLoader2, TriangleAlert } from "lucide-react";

export const SignupCard = () => {
    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });

    const [validationError, setValidationError] = useState(null);
    const { isPending, isSuccess, error, signupMutation } = useSignup();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Signup form submitted', signupForm);

        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
            console.error('All fields are required');
            setValidationError({message: 'All fields are required'})
            return;
        }

        if(signupForm.password !== signupForm.confirmPassword) {
            setValidationError({message: 'Passwords do not match'})
            console.error('Passwords do not match');
        }

        setValidationError(null);

        await signupMutation({
            email: signupForm.email,
            password: signupForm.password,
            name: signupForm.username
        })
    }

    useEffect(() => {
        setTimeout(() => {
            if(isSuccess) {
                navigate('/auth/signin');
            }
        }, 2000)
    }, [isSuccess])

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Sign Up to access your account</CardDescription>

                {validationError && (
                    <div className="bg-destructive/15 p-4 flex items-center gap-x-2 mb-6 text-sm text-destructive">
                        <TriangleAlert className="size-5" />
                        <p>{validationError.message}</p>
                    </div>
                )}

                {error && (
                    <div className="bg-destructive/15 p-4 flex items-center gap-x-2 mb-6 text-sm text-destructive">
                        <TriangleAlert className="size-5" />
                        <p>{validationError.message}</p>
                    </div>
                )}

                {isSuccess && (
                    <div className="bg-primary/15 p-3 rounded-md flex items-center text-sm text-primary mb-5">
                        <p>Successfully signed up, redirecting to login page</p>
                        <LucideLoader2 className="animate-spin ml-2"/>
                    </div>
                )}

            </CardHeader>
            <CardContent>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <Input 
                        placeholder = "Email"
                        required
                        onChange = {(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        value = {signupForm.email}
                        type = "email"
                        disabled = {false}
                    >
                        
                    </Input>

                    <Input 
                        placeholder = "Password"
                        required
                        onChange = {(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                        value = {signupForm.password}
                        type = "password"
                        disabled = {false}
                    >
                        
                    </Input>

                    <Input 
                        placeholder = "Confirm Password"
                        required
                        onChange = {(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                        value = {signupForm.confirmPassword}
                        type = "password"
                        disabled = {false}
                    >
                        
                    </Input>

                    <Input 
                        placeholder = "Username"
                        required
                        onChange = {(e) => setSignupForm({ ...signupForm, username: e.target.value })}
                        value = {signupForm.username}
                        type = "text"
                        disabled = {false}
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
                    Already have an account? {' '}
                    <span 
                        className="text-sky-900 hover:underline cursor-pointer"
                        onClick={() => navigate('/auth/signin')}
                    >
                        Sign In
                        
                    </span>
                </p>
            </CardContent>
        </Card>
    )
}