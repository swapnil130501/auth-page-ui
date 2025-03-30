import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "../../../apis/auth";

export const useSignup = () => {
    const { isPending, isSuccess, error, mutate: signupMutation } = useMutation({
        mutationFn: signupRequest,
        onSuccess: (data) => {
            console.log("Successfuly signed up", data);
        },
        onError: (error) => {
            console.error("Failed to sign up", error);
        }
    })

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}