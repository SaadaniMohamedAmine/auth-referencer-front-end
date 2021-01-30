import {React,useState,useEffect} from 'react'
import '../App.css'
import {useDispatch,useSelector} from 'react-redux' 
import {registerUser} from '../actions/authActions'
import Axios from 'axios'
//import { response } from 'express'
const Register = ({history}) => {
    //this state info will recuperate teh values written in the inputs
    //to get the value from every input,we use the event onChange with function handleChange
    const [info,setInfo]=useState({
        firstName:"" ,
        lastName:"" ,
        phone:"" ,
        email:"",
        password:""
    }) ;
    //this is a hook for adding a file to the register form
    const [file,setFile]=useState(null) ;
    //we use the handleChange function 
    //we store the old info and we add for each change object {[e.target.name]:e.target.value}
    const handleChange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    };
    //change the syntax of dispatch
    const dispatch=useDispatch() ;
    const registerNow=(e)=>{
        e.preventDefault() ;
        dispatch(registerUser(info,file)) ;
      
    } ;
    //import the state of isAuth to check if the user is connected
    const auth=useSelector((state)=>state.auth) ;
    const isAuth=useSelector((state)=>state.auth.isAuth) ;
    //to check if the state auth.isAuth changes,we use the useEffect()
    useEffect(()=>{
        if (auth.isAuth)  { 
            history.push("/feed")
        }
    },[isAuth])
    //when it verify that the auth.isAuth is true,it will tke you to the component/page og feed
    //this function has like effect to maintain the change on change event
    //of the input with type file 
    const selectImageToUpload=(e)=>{
        setFile(e.target.files[0]) ;
    };
    return (
        <div>
            <h4>I am the Register page </h4> 
            {/*we use the event : onSubmit to dispatch the action made on actiosn*/}
            <form className="form" onSubmit={registerNow}>
                <div className='sec'>
                  <label className="register-label">First name :</label>
                  <input type="text" className="register-input" name="firstName" onChange={handleChange} />
                </div>
                <div className='sec'>
                  <label className="register-label">Last name :</label>
                  <input type="text" className="register-input" name="lastName" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">Phone:</label>
                  <input type="number" className="register-input" name="phone" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">email :</label>
                  <input type="text" className="register-input" name="email" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">Password :</label>
                  <input type="password" className="register-input" name="password" onChange={handleChange}/>
                </div>
                {/*to keep the uploading image good,we add an input with type file
                   and we must set up the name attribute with the same name in the backend part
                 */}
                <div className='sec'>
                  <label className="register-label">your avatar:</label>
                  <input type="file" className="register-input" name="avatar" onChange={selectImageToUpload}/>
                </div>
                <button type="submit" className='register-submit' onClick={()=>{console.log(user)}}>Register</button>
            </form>
        </div>
    )
}

export default Register
