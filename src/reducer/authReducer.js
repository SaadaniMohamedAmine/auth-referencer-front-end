//this is a reducer for the auth
//in this reducer,we will initiate teh state of the reducer 
//we will set there, a token,the user and the isAuth(boolean)
//the token is in the back and stored in the local storage

import {REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/types'
//the local storage is an object (contain kee and value )
let initState={
    token:localStorage.getItem('token'),
    user:null ,
    isAuth:false ,
    error:null
}

const AuthReducer=(state=initState,action) =>{
  switch(action.type) {
    //the login success will take same params as the register success
    case LOGIN_SUCCESS : 
    case REGISTER_SUCCESS :
      localStorage.setItem('token',action.payload.token)
      return{
        ...state,
        token:action.payload.token,
        isAuth:true,
      error:null
     };
     case LOGIN_FAIL :
     case LOAD_USER_FAIL:
     case REGISTER_FAIL :
      localStorage.removeItem('token');
      return{
        ...state,
        isAuth:false,
      error:action.payload
     };
     case LOAD_USER_SUCCESS :
       return {
         ...state,
         user:action.payload,
         error:null
       };
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          isAuth:false ,
          error:null,
          user:null
        }
         

   default:
        return state ;
  }
}
export default AuthReducer ;