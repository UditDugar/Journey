const BASE_URL = 'https://bingehq.com/journey-app/api';

export const APP_APIS = {
  BASE_URL: BASE_URL,
  LOGIN: BASE_URL + '/login',
  VERIFY_OTP: BASE_URL + '/verify-otp',
  REGISTER: BASE_URL + '/register',
  LOGOUT: BASE_URL + '/logout',

  //POST
  ACTIVITY_ADD: BASE_URL + '/add-activity',
  ADD_ACTIVITY_NAME: BASE_URL + '/add-activity-name',

  //GET

  ACTIVITIES: BASE_URL + '/activities',
};

export const API_TYPE = {
  POST: 'POST',
  GET: 'GET',
};
// export const HEADER_TYPE={
//    FILE:{
//     'Content-Type': 'multipart/form-data',
//     Authorization: `Bearer ${token}`,
//    },
//    JSON:{'Content-Type': 'application/json',
//    Authorization: `Bearer ${token}`}
// }