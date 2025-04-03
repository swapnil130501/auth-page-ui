import { useMutation } from "@tanstack/react-query";
import { signinRequest } from "../../../apis/auth";
import { useToast } from '../../../hooks/use-toast';
import { useAuth } from "../../useAuth";

export const useSignin = () => {
    const { toast } = useToast();
    const { setAuth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (response) => {
            console.log("Successfuly signed in", response);

            localStorage.setItem('token', response.data);
            setAuth({
                token: response.data,
                isLoading: false
            })
            
            console.log(response.data);

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