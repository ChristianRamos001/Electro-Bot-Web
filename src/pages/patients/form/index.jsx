import { Helmet } from "react-helmet";
import LayoutAuth from "../../main/auth";
import PatientForm from "../../../components/form/patient";

const PatientsFormPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cardio | Paciente - Registro</title>
      </Helmet>
      <LayoutAuth>
        <PatientForm />
      </LayoutAuth>
    </div>
  );
};

export default PatientsFormPage;
