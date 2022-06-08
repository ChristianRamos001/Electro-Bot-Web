import { Helmet } from "react-helmet";
import LayoutAuth from "../../main/auth";
import PatientEcg from "../../../components/form/ecg";

const PatientsEcgPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cardio | Paciente - ECG</title>
      </Helmet>
      <LayoutAuth>
        <PatientEcg />
      </LayoutAuth>
    </div>
  );
};

export default PatientsEcgPage;
