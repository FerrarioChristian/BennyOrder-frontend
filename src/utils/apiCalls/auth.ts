import axiosInstance from "../axios";
import { LoginCustomerType, LoginUserType, RegisterUserType } from "../types";

export const logoutUserApi = () =>
  axiosInstance.delete("/auth/users", {
    withCredentials: true,
  });

export const loginUserApi = (loginCredentials: LoginUserType) =>
  axiosInstance.post("/auth/users", loginCredentials, {
    withCredentials: true,
  });

export const registerUserApi = (registerCredentials: RegisterUserType) =>
  axiosInstance.post("/accounts", registerCredentials, {
    withCredentials: true,
  });

// export const confirmAccountApi = () => {};

export const loginCustomerApi = (loginCredentials: LoginCustomerType) =>
  axiosInstance.post("/auth/customers", loginCredentials, {
    withCredentials: true,
  });
