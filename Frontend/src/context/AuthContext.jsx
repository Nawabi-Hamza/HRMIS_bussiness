import { createContext,useState,useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()
//  API BEFOREHAND
export const MainApi = "http://localhost:5001"
export const AuthContextProvider = ({children})=>{                            
    const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem("userHRMIS")) || null)
    // =======login function=======
    const login = async (inputs)=>{
        // console.log(inputs)
       const res =  await axios.post(`${MainApi}/users/login`,inputs)
       setCurrentUser(res.data)
    }
    // ======logout function=======
     const logout = async(inputs)=>{
      //   await axios.post(`${MainApi}/users/logout`)
        setCurrentUser(null)
      //   alert("You Logout Successfuly")
     }

     useEffect(() => {
       localStorage.setItem("userHRMIS",JSON.stringify(currentUser))
     }, [currentUser])
     
     return(
     <AuthContext.Provider value={{currentUser, login , logout}}>
        {children}
     </AuthContext.Provider>
        )
}
