// User creation and verification

// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
  };
};

// INSERT INTO users (username, password, email) VALUES ('test1', 'hunter2', 'test1@gmail.com');