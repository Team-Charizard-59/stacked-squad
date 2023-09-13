import db from "../models/ssModels.js";
import bcrypt from "bcrypt";
// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${
      typeof err === "object" ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in userController.${method}. Check server logs for more details.`,
    },
  };
};
const sessionController = {};

// create a temp table!
sessionController.startSession = (req, res, next) => {
  const sessionQuery = `INSERT INTO sessions(cookie_id)
                          VALUES($1)
                          RETURNING cookie_id`;
  const cookie_id = res.locals.user.user_id;
  db.query(sessionQuery, [cookie_id])
    .then((data) => {
      console.log("session started: ", data);
      res.locals.cookie_id = data.rows[0].cookie_id;
      return next();
    })
    .catch((err) => {
      return next({
        log: "Could not start the session at sessionController.startSession",
        status: 500,
        message: { err },
      });
    });
};

sessionController.isLoggedIn = (req, res, next) => {
  const sessionQuery = `SELECT *
                          FROM sessions 
                          WHERE cookie_id = $1`;
  const { ssid } = req.cookies;
  console.log("ssid", ssid);
  db.query(sessionQuery, [ssid])
    .then((data) => {
      if (data.rows.length != 0) return res.redirect("/signup");
      else return next();
    })
    .catch((err) => {
      return next({
        log: "Error occurred in sessionController.isLoggedIn.",
        status: 500,
        message: { err: err },
      });
    });

  // Session.find({})
  //   .then(data => {
  //     console.log('Return everything:', data)
  //     return next();
  //   })
};

sessionController.endSession = (req, res, next) => {
  const sessionQuery = `DELETE FROM sessions
                        WHERE cookie_id = $1`;
  const { ssid } = req.cookies;
  console.log("ssid", ssid);
  db.query(sessionQuery, [ssid])
    .then((data) => {
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error occurred in sessionController.endSession.",
        status: 500,
        message: { err: err },
      });
    });
};

export default sessionController;
