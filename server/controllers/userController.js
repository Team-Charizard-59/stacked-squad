// User creation and verification
import db from '../models/ssModels.js';
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
      const querySelector = `SELECT * 
                             FROM users
                             WHERE username = $1 & password = $2`
      try {
        // find user in DB
        db.query(querySelector, [username, password])
        .then(data => {
          console.log(data)
          res.locals.user = data.rows;
        })
    
        // verify that password is valid using bcrypt
        const match = await bcrypt.compare(password, user.password);
        return match
          ? next()
          : next({
              log: `Express error handler caught an error at userController.verifyUser: ${err}`,
              message: {
                err: 'An error occurred with verifying your credentials.',
              },
            });
      } catch (err) {
        return next({
          log: `Express error handler caught an error at userController.verifyUser: ${err}`,
          message: { err: 'An error occurred with verifying your credentials.' },
        });
      }
    };

    userController.createUser = (req, res, next) => {
      const addUserQuery = `INSERT INTO users (username, password)
                            VALUES ($1, $2)`
      const {username, password} = req.body;
      // check the database if username already exists
      db.query(addUserQuery, [username, password])
      .then(() => {
        res.locals.user = username;
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