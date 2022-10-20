import { gatewayHelper } from "../utility";

async function register(user) {
  const response = await gatewayHelper.http("post", "register", user);
  return response.data;
}

async function login(user) {
  const response = await gatewayHelper.http("post", "auth/local", user);
  return response.data;
}

async function getUsers() {
  const response = await gatewayHelper.http("get", "users");
  return response.data;
}

async function getUser(id) {
  const response = await gatewayHelper.http("get", `users/${id}`);
  return response.data;
}

export const userService = {
  login,
  register,
  getUsers,
  getUser,
};