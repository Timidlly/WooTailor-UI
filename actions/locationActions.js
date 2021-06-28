import {
LOCATION_LOAD, LOCATION_REMOVE, CORR_LOAD, CORR_REMOVE
  } from '../constants/LocationConstant';


  export const locationAction = (data) => async (dispatch) => {
    dispatch({ type:LOCATION_LOAD, payload: data });
    localStorage.setItem('location', JSON.stringify(data));
    
  };


  export const locationRemove = () => async (dispatch) => {
    dispatch({ type:LOCATION_REMOVE});
    localStorage.removeItem('location');
    
  };

  export const corrRemove = () => async (dispatch) => {
    dispatch({ type:CORR_REMOVE});
    localStorage.removeItem('corr');
    
  };


  export const corrAction = (data) => async (dispatch) => {
    dispatch({ type:CORR_LOAD, payload: data });
    localStorage.setItem('corr', JSON.stringify(data));
    
  };