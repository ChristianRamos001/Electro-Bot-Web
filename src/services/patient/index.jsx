import { request } from "../../utils/api";

export const patientService = {
  getPatients,
  showPatient,
};

function getPatients() {
  return request.get(`Medicos/VisualizarPacientes`);
}

function showPatient(id) {
  return request.get(`Pacientes/${id}`);
}
