import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button'

export const SignupCard = () => {

    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });

    return (
        <Card classname="w-full h-full">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Sign Up to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-3">
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
            </CardContent>
        </Card>
    )
}