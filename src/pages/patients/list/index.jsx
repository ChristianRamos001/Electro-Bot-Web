import { Helmet } from "react-helmet";
import LayoutAuth from "../../main/auth";
import PatientsTable from "../../../components/table/patients";

const PatientsListPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cardio | Pacientes</title>
      </Helmet>
      <LayoutAuth>
        <PatientsTable />
      </LayoutAuth>
    </div>
  );
};

export default PatientsListPage;
