const host = "https://app-api-ai-heart-mt-prod-eu2-01.azurewebsites.net";

class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem("token", token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return !this.isEmpty(localStorage.getItem("token"));
  }

  /**
   * DeAuthenticate a user. Remove a token from Local Storage.
   *
   */
  static deAuthenticateUser() {
    // localStorage.removeItem("token");
    // localStorage.clear();
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem("token");
  }

  static setDataUser(response) {
    const token = this.getToken();
    localStorage.clear();
    localStorage.setItem("token", token);
  }

  static authHeader() {
    if (!this.isEmpty(this.getToken())) {
      let type_token = "Bearer";
      let token = this.getToken();
      return {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `${type_token} ${token}`,
      };
    } else {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "",
      };
    }
  }

  static errorServer() {
    this.deAuthenticateUser();
  }

  static request(path, options) {
    const target = `${host}/api/${path}`;
    return fetch(target, options)
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch(() => {
        this.errorServer();
      });
  }

  static isEmpty(value) {
    return ["", null, undefined].includes(value);
  }
}

export default Auth;
