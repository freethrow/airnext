import { createContext, useState, useEffect } from "react";

import netlifyIdentity from "netlify-identity-widget"


const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState("Kokos")  


    useEffect(()=>{
        netlifyIdentity.init()
    },[])

    const login = netlifyIdentity.open()

    return <AuthContext.Provider value={{user, setUser, login}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext