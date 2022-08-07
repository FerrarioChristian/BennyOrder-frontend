import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../axios";
import { LoginCustomerType, LoginUserType, RegisterUserType } from "../types";

export const logoutUserApi = () =>
  axiosInstance.delete("/auth/users", {
    withCredentials: true,
  });

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(logoutUserApi, {
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

const loginUserApi = (loginCredentials: LoginUserType) =>
  axiosInstance.post("/auth/users", loginCredentials, {
    withCredentials: true,
  });

export const useLoginMutation = () => useMutation(loginUserApi);

export const registerUserApi = (registerCredentials: RegisterUserType) =>
  axiosInstance.post("/accounts", registerCredentials, {
    withCredentials: true,
  });

// export const confirmAccountApi = () => {};

export const loginCustomerApi = (loginCredentials: LoginCustomerType) =>
  axiosInstance.post("/auth/customers", loginCredentials, {
    withCredentials: true,
  });

const getUserInfo = () =>
  axiosInstance.get("/auth/users", { withCredentials: true });

export const useGetUserInfo = () => {
  return useQuery("getUserInfo", getUserInfo, {
    retry: false,
  });
};
