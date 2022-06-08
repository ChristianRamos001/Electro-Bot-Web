import { request } from "../../utils/api";

export const ecgService = {
  showRecordECGs,
};

function showRecordECGs(id) {
  return request.get(`RecordECGs/${id}`);
}
