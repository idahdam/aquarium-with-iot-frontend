import { gatewayHelper } from "../utility";

async function getItems() {
  const response = await gatewayHelper.http("get", "items");
  return response.data;
}

export const itemService = {
  getItems,
};