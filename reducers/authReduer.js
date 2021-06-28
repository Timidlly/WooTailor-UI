import {CREATE_ACCOUNT_ERROR, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_REQUEST,

USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT

} from '../constants/AuthConstants'



export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ACCOUNT_REQUEST:
        return { loading: true };
      case CREATE_ACCOUNT_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case CREATE_ACCOUNT_ERROR:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };
  