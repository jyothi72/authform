import React, { useState } from "react"

let AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{

    }})
    export const Authcontextprovider=(props)=>{
        const inittoken=localStorage.getItem('token')
       const[token,settoken]= useState(inittoken)

       const userloggedin=!!token;
       const loginhandler=(token)=>{               
          settoken(token)
          localStorage.setItem('token',token)
       }
       const logouthandler=()=>{
           settoken(null)
           localStorage.removeItem('token')

       }
       
       const contextvalue={
        token:token,
        isLoggedIn:userloggedin,
        login:loginhandler,
        logout:logouthandler
       }
        return(
        <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>)
    }
    export default AuthContext;