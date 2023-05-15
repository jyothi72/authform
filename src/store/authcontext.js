import React, { useState } from "react"

let AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{

    }})
    export const Authcontextprovider=(props)=>{
       const[token,settoken]= useState(null)
       const userloggedin=!!token;
       const loginhandler=(token)=>{
          settoken(token)
       }
       const logouthandler=()=>{
           settoken(null)
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