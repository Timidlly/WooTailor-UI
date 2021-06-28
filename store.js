import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {locationLoadReducer, corrLoadReducer} from './reducers/locationReducer'
import {userRegisterReducer, userSigninReducer} from './reducers/authReduer'
const ISSERVER = typeof window === "undefined";

function s(){
    if (process.browser) {
        const a= localStorage.getItem('location')
        return JSON.parse(a);
    }else{
        return null
    }
}


function c(){
    if (process.browser) {
        const a= localStorage.getItem('corr')
        return JSON.parse(a);
    }else{
        return null
    }
}

function user(){
    if (process.browser) {
        const a= localStorage.getItem('userInfo')
        return JSON.parse(a);
    }else{
        return null
    }
}

const initialState = {
    
    location: s(),

      corr:c(),
      userSignin: {
        userInfo: user()
      }




};
const reducer = combineReducers({
location: locationLoadReducer,
corr: corrLoadReducer,
userSignin: userSigninReducer,
userRegister: userRegisterReducer,

 
});
const composeEnhancer =compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
