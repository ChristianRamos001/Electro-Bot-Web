import Auth from "./auth";
import { useHistory } from "react-router-dom";

const RequireAuth = ({ children }) => {
  let history = useHistory();

  if (!Auth.isUserAuthenticated()) {
    history.push(`/login`);
  }

  return children
};

export default RequireAuth;
