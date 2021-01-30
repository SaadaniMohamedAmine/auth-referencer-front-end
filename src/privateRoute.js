import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

//access to the auth object in the store via useSelector

//this is a private route 
//it receive props from the Route component in app.js,
//the ...rest represent the exact obj and path obj 
const PrivateRoute = ({component:Component,...rest}) => {
    const auth=useSelector((state)=>state.auth) ;
    return (
        <Route {...rest} render={props=>
            !auth.isAuth?<Redirect to="/login" /> 
            :<Component {...props} />
        } />
    )
}

export default PrivateRoute
