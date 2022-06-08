import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../../login";
import PatientsListPage from "../../patients/list";
import PatientsFormPage from "../../patients/form";
import PatientsEcgPage from "../../patients/ecg";
import RequireAuth from "../../../utils/requireAuth";
import PatientsEcgDetailsPage from "../../patients/ecgDetail";

const RouterMount = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/">
          <RequireAuth>
            <PatientsListPage />
          </RequireAuth>
        </Route>
        <Route exact path="/paciente/:id">
          <RequireAuth>
            <PatientsFormPage />
          </RequireAuth>
        </Route>
        <Route exact path="/paciente/:id/ecg">
          <RequireAuth>
            <PatientsEcgPage />
          </RequireAuth>
        </Route>
        <Route exact path="/paciente/:id/ecg/detalle/:idDetail">
          <RequireAuth>
            <PatientsEcgDetailsPage />
          </RequireAuth>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterMount;
