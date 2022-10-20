import axios from "axios";
import authHeader from "./authHeader";

const BASE_URL = process.env.REACT_APP_BASE_URL;

async function http(method, endpoint, data) {
  const headers = authHeader();

  let response = null;

  if (method) {
    response = await axios({
      url: `${BASE_URL}/api/${endpoint}`,
      method: method.toUpperCase(),
      headers,
      params: null,
      data,
    });
  }

  return response;
}

export const gatewayHelper = {
  http,
};
