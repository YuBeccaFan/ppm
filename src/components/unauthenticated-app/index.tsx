import React from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"

 export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = React.useState(false)
    return <div>
        {isRegister? <RegisterScreen/>: <LoginScreen/>}
        <button onClick={() => setIsRegister(!isRegister)}>Switch to {isRegister? "Login": "Register"}</button>
    </div>
 }