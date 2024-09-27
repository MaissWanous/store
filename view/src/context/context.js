import { createContext, useState } from "react";

export const User = createContext(null)
export default function UserProvider(chiled) {
    const [auth, setAuth] = useState("")
    return <User.Provider value={{ auth, setAuth }}>{chiled}</User.Provider>
}