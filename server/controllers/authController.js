// For JWT / sessions ?

// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `authController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in authController.${method}. Check server logs for more details.` }
  };
};