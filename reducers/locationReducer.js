import {LOCATION_LOAD, LOCATION_REMOVE, CORR_LOAD, CORR_REMOVE} from '../constants/LocationConstant'


export const locationLoadReducer = (state = {}, action) => {
    switch (action.type) {
      case LOCATION_LOAD:
        return { loading: false, location: action.payload, };
      case LOCATION_REMOVE:
        return {};
      default:
        return state;
    }
  };




  export const corrLoadReducer = (state = {}, action) => {
    switch (action.type) {
      case CORR_LOAD:
        return { loading: false, corr: action.payload, };
      case CORR_REMOVE:
        return {};
      default:
        return state;
    }
  };

//   export const userDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//       case USER_DELETE_REQUEST:
//         return { loading: true };
//       case USER_DELETE_SUCCESS:
//         return { loading: false, success: true };
//       case USER_DELETE_FAIL:
//         return { loading: false, error: action.payload };
//       case USER_DELETE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
  