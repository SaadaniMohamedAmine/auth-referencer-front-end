import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
import{useSelector,useDispatch} from 'react-redux'
import {logOutUser} from '../actions/authActions'

const Navbar = () => {
    const dispatch=useDispatch() ;
    const auth=useSelector((state)=>state.auth) ;
 
    return (
        <div className='navbar'>
            {/* Make the navbar in conditional rendering !!
            if the user is connected,just the home and link to Profile and log out*/}
            <Link to='/' className='link'>Home</Link>
            {auth.isAuth? (
                <>
                <Link to='/profile'>Profile</Link>
                <Link onClick={()=>dispatch(logOutUser())}>Log out</Link>
                </>
            )
             :(<>
             <Link to='/login' className='link'>Login</Link>
            <Link to='/register' className='link'>Register</Link>
             </>)}
        </div>
    )
}

export default Navbar
