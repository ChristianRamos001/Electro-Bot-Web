import Auth from "./auth";
import querystring from "querystring-es3";


class API {
  get(path, parameters) {
    const params = querystring.stringify(parameters);
    const target = `${path}?f${params}`;
    let requestOptions = {
      method: "GET",
      headers: Auth.authHeader(),
    };

    return Auth.request(target, requestOptions);
  }

  post(path, data) {
    const target = path;
    let requestOptions = {
      method: "POST",
      headers: Auth.authHeader(),
      body: JSON.stringify(data),
    };

    return Auth.request(target, requestOptions);
  }

  delete(path, data) {
    const target = path;
    let requestOptions = {
      method: "DELETE",
      headers: Auth.authHeader(),
      body: JSON.stringify(data),
    };

    return Auth.request(target, requestOptions);
  }

  put(path, data) {
    const target = path;
    let requestOptions = {
      method: "PUT",
      headers: Auth.authHeader(),
      body: JSON.stringify(data),
    };

    return Auth.request(target, requestOptions);
  }
}

export const request = new API();
