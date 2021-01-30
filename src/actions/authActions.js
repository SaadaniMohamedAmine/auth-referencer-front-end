import {REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types'

import axios from 'axios'
import setToken from '../setToken'
 //we need axios to manage teh requests and get data from the backend setup
export const  registerUser=(info,file)=>dispatch=>{
        //implement the object form data into the function 
        //define the object FormData(),after that append to it the file defined in thr backend part
        let formData=new FormData() ;
        formData.append("avatar",file) ;
        formData.append("info",JSON.stringify(info)) ;
  axios.post('/register',formData)
  //with this request,we send the info object(inputs,hooks)
  //in then ,in case with no errors,we have the res with payload that contain 
  //the information about the person
  .then(res=>dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data 
  }))
  //in case of errors, we have the catch method,it will dispatch
  //an action and a payload that contain the err msg
  .catch(err=>dispatch({
      type : REGISTER_FAIL,
      payload:err.response.data.errors 
  }))
}

//load user data
//action to dispatch the action in witch we will load the user data
//get the user data if the verification was true and the user is connected !!!
export const loadUSer=()=>dispatch=>{
    setToken();
    axios.get('/login')

    .then(res=>dispatch({
        type:LOAD_USER_SUCCESS ,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:LOAD_USER_FAIL,
        payload:err.response.data.errors
    }))
}

//login action
export const loginUser=(data)=>dispatch=>{
    axios.post('/login',data)
    .then(res=>dispatch({
        type:LOGIN_SUCCESS ,
        payload:res.data 
    }))
     .catch(err=>dispatch({
        type:LOGIN_FAIL ,
        payload:err.response.data.errors,
    }))
}

//logout action 
export const logOutUser=()=>(dispatch)=>{
   dispatch({
       type:LOGOUT,
   })
}