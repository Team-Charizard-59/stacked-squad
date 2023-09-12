// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `sampleController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in sampleController.${method}. Check server logs for more details.` }
  };
};

const lobbyController = {};
