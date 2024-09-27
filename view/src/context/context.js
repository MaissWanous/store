import { createContext, useState } from "react";

export const User = createContext(null)
export default function UserProvider() {
    const [auth, setAuth] = useState("")
    return <User.Provider value={{ auth, setAuth }}></User.Provider>
}