import db from '../models/ssModels.js';



const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return {
      log: `authController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in authController.${method}. Check server logs for more details.` }
    };
}  

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    // write code here
    const userId = res.locals.cookie_id; 
    console.log('in cookie', res.locals.cookie_id);
    res.cookie('ssid', userId);
    return next();
  }

cookieController.deleteCookie = (req, res, next) => {
    const userId = res.locals.cookie_id;
    console.log('deleting cookie', res.locals.cookie_id)
    res.clearCooke('ssid');
    return next();
}


  
 export default cookieController;