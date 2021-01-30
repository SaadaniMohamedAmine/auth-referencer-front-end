import axios from 'axios' 
//this action is done o set the token in head response
//if it exists,it will be sent throw the response header
//if it doesn't exist,the header will be cleared !!
const setToken=()=>{
    //receive the token and store it in  ake named "token"
    let token=localStorage.getItem('token') ;

    if(token) {
        //if token is true,so retrieve the token from localStorage and send
        //it in the header of the response
        axios.defaults.headers.common['auth-token']=token
    }
    else {
        //if token is false,remove the token from the header
        delete axios.headers.common['auth-token']
    }
}

export default setToken ;