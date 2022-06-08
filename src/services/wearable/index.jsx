import { request } from "../../utils/api";

export const wearableService = {
  getWearables,
};

function getWearables() {
  return request.get(`Wearables/Listar`);
}
