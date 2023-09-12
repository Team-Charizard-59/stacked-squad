// For JWT / sessions ?
import jwt from 'jsonwebtoken';

// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `authController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in authController.${method}. Check server logs for more details.` }
  };




//   The user sends a login request to the server.
// The server authenticates the login request, sends a session to the database, and returns a cookie containing the session ID to the user.
// Now, the user sends new requests (with a cookie).
// The server checks in the database for the ID found in the cookie, if the ID is found it sends the requested pages to the user.
const authController = {};

authController.setJwtToken = (req, res, next) => {


}

authController.verifyUser = (req, res, next) => {

}

authController.login = (req, res, next) => {

}


};

export default authController;