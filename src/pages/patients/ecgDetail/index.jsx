import { Helmet } from "react-helmet";
import LayoutAuth from "../../main/auth";
import PatientEcgDetails from "../../../components/form/ecgDetail";

const PatientsEcgDetailsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cardio | Paciente - ECG Detalle</title>
      </Helmet>
      <LayoutAuth>
        <PatientEcgDetails />
      </LayoutAuth>
    </div>
  );
};

export default PatientsEcgDetailsPage;
