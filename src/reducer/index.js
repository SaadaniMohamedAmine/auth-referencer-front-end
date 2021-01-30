import {combineReducers} from 'redux'
import AuthReducer from './authReducer'

export default combineReducers({auth:AuthReducer})


//in this file,we make the root reducer to combine all the reducers
//in order to push them in the store 
 