import React,{useEffect} from 'react'
import {loadUSer} from '../actions/authActions'
import{useDispatch,useSelector} from 'react-redux'
const Feed = () => {
    const dispatch=useDispatch() ;
    //we use here useEffect to get information just when the 
    //component was mounted  
    //in this const below,e store the authReducer contains the data of user loaded
    //to easily manipulating them
    const  auth=useSelector(state=>state.auth)
    useEffect(()=>{
         dispatch(loadUSer())
    },[])
    return (
        <div>
            <h4>I am the feed page !!</h4>
            {auth.user && 
            (
                <>
                  <img src={auth.user.avatar} />
            <h5>Hello {auth.user.firstName}</h5>
                </>
            )
            }
        </div>
    )
}

export default Feed
