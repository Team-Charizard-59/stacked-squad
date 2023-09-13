// User creation and verification
import db from '../models/ssModels.js';
import bcrypt from 'bcrypt';
// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
  };
}
  const userController = {};
    
    userController.verifyUser = async (req, res, next) => {
      const { username, password } = req.body;
      const querySelector = `SELECT user_id, username 
                             FROM users
                             WHERE username = $1 AND password = $2`
        // find user in DB
        db.query(querySelector, [username, password])
        .then(data => {
          if (data.rows.length != 0) {
          res.locals.user = data.rows[0];
          console.log(res.locals.user, 'heiehihat')
          return next()
        } else return next({
          log: 'Could not verify the username or password at userController.verifyUser',
          status: 401,
          message: { err }
        })})
        .catch(err => {
          return next({
            log: 'Error at userController.verifyUser',
            status: 500,
            message: { err }
          })
        })
      }
    


    userController.createUser = (req, res, next) => {
      const addUserQuery = `INSERT INTO users (username, password)
                            VALUES ($1, $2)
                            RETURNING user_id, username`
      const {username, password} = req.body;
      // check the database if username already exists
      db.query(addUserQuery, [username, password])
      .then((data) => {
        console.log(data)
        res.locals.user = data.rows[0];
        return next();
      })
      .catch(err => {
        return next({
        log: 'Could not add the new user to the database at userController.createUser',
        status: 500,
        message: { err }
             })
          })
        }




export default userController;