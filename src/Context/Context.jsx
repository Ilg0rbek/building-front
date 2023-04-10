import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const project_token = window.localStorage.getItem("project_token")
    const [token, setToken] = useState(project_token !== null? project_token: null)
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("project_token", token)
        }
    },[token]) 
    const project_user = window.localStorage.getItem("project_user")
    const [user, setUser] = useState(project_user !== null? JSON.parse(project_user): null)
    useEffect(() => {
        if(user !== null){
            window.localStorage.setItem("project_user", JSON.stringify(user))
        }
    },[user])
    const [modal, setModal] = useState(!true)
    return(
        <Context.Provider value={{ modal, setModal,token, setToken, user, setUser}}>
            {children}
        </Context.Provider>
    )
}