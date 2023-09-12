// User creation and verification
import db from '../models/ssModels';
// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
  };

    const userController = {};
    
    userController.verifyUser = async (req, res, next) => {
      const { username, password } = req.body;
      const querySelector = `SELECT * 
                             FROM users
                             WHERE username='${username}'`
      try {
        // find user in DB
        db.query(querySelector)
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
      const querySelector = `SELECT username
                             FROM users
                             WHERE username = '$1'`
      const addUserQuery = `INSERT INTO users (username, password)
                            VALUES ($1, $1)`
      const {username, password} = req.body;
      
      // check the database if username already exists
      db.query(querySelector, username)
      .then(data => {
        // check if username has already been taken
        if (data.rows.length !== 0) return next({
          log: 'Username already taken, please choose a different username',
          status: 409,
          message: {err }
        })
        // if hasn't been taken, we will add to account
        else {
          res.locals.user = data.rows[0]
          db.query(addUserQuery, username, password)
          .then(data => {
            console.log(`User created successfully: ${data.rows}`)
          })
          .catch(err => {
            return next({
              log: 'Could not add the new user to the database at userController.createUser',
              status: 500,
              message: { err }
            })
          })
        }
      })
      .catch(err => {
        return next({
          log: 'Could not retrieve username from the database at userController.createUser',
          status: 500,
          message: { err }
        })
      })
    }


};

export default authController;