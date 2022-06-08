import { request } from "../../utils/api";

export const authService = {
  login,
};

function login(attributes = {}) {
  return request.post(`Usuarios/Login`, attributes);
}
