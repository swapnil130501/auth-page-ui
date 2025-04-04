import { useMutation } from "@tanstack/react-query";
import { signinRequest } from "../../../apis/auth";
import { useToast } from '../../../hooks/use-toast';
import { useAuth } from "../../useAuth";
import { jwtDecode } from "jwt-decode";

export const useSignin = () => {
    const { toast } = useToast();
    const { setAuth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (response) => {
            console.log("Successfuly signed in", response);
        
            const { accessToken } = response.data;
            console.log(accessToken)
            localStorage.setItem('access_token', accessToken);

            const decodedToken = jwtDecode(accessToken);
            const expirationTime = decodedToken.exp * 1000;

            localStorage.setItem("token_expiry", expirationTime);

            setAuth({
                token: accessToken,
                isLoading: false
            })

            toast({
                title: 'Successfuly signed in',
                message: 'You will be redirected to the home page in a few seconds',
                type: 'success'
            })
        },
        onError: (error) => {
            console.error("Failed to sign in", error);
            toast({
                title: 'Failed to sign in',
                message: error.message,
                type: 'error',
                variant: 'destructive'
            })
        }
    })

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    }
}