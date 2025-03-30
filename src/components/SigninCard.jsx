import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button'
import { Separator } from "../components/ui/separator";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SigninCard = () => {
    const navigate = useNavigate();

    const [signInForm, setSigninForm] = useState({
        email: '',
        password: ''
    });
    
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign In to access your account</CardDescription>
            </CardHeader>

            <CardContent>
                <form className='space-y-3'>
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