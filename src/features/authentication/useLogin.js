import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect");
    },
  });
  return { login, isLogin };
}
