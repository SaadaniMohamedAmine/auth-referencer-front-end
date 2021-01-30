import {React,useState,useEffect} from 'react'
import {loginUser} from '../actions/authActions'
import{useDispatch,useSelector} from 'react-redux'
const Login = ({history}) => {
    //this state info will recuperate teh values written in the inputs
    //to get the value from every input,we use the event onChange with function handleChange
    const [info,setInfo]=useState({
        email:"",
        password:""
    }) ;
    //state to store and display errors 
    const [errors,setErrors]=useState(null) 
    //we use the handleChange function 
    //we store the old info and we add for each change object {[e.target.name]:e.target.value}
    const handleChange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    };
    const dispatch=useDispatch() ;
    const login=(e)=>{
        e.preventDefault() ;
        dispatch(loginUser(info))
        
    };//import the state of isAuth to check if the user is connected
    const auth=useSelector((state)=>state.auth) ;
    //to check if the state auth.isAuth changes,we use the useEffect()
    useEffect(()=>{
        if (auth.isAuth)  {
            history.push("/feed")
        }
        if(auth.error){
           setErrors(auth.error) ;
           setTimeout(()=>{
               setErrors()
           },5000)
        }
    },[auth.isAuth,auth.error])
    return (
        <div>
            <h4>I am the login page</h4>
            <form className="form" onSubmit={login}>
                <div className='sec'>
                  <label className="register-label">email :</label>
                  <input type="text" className="register-input" name="email" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">Password :</label>
                  <input type="text" className="register-input" name="password" onChange={handleChange}/>
                </div>
    {errors &&  errors.map(el=><h4>{el.msg}</h4>)}
                <button type="submit" className='register-submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
