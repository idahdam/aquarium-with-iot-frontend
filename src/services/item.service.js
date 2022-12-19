import { gatewayHelper } from "../utility";

async function getItems() {
  const response = await gatewayHelper.http("get", "items?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=100");
  return response.data;
}

export const itemService = {
  getItems,
};