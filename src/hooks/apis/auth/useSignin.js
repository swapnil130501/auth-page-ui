import { useMutation } from "@tanstack/react-query";
import { signinRequest } from "../../../apis/auth";
import { useToast } from '../../../hooks/use-toast';

export const useSignin = () => {
    const { toast } = useToast();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (data) => {
            console.log("Successfuly signed in", data);
            toast({
                title: 'Successfuly signed in',
                message: 'You will be redirected to the home page in a few seconds',
                type: 'sucess'
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