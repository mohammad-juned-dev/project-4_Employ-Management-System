import React , {useContext, useState , useEffect} from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null)
  const authData =  useContext(AuthContext)

  useEffect(() => {
    
    if(authData){
const loggedInUser = localStorage.getItem("loggedInUser")
if(JSON.parse(loggedInUser)){
  setUser(loggedInUser.role)
}
    }
  }, [authData])
  



  const handleLogin =(email, password)=>{
if(email =="admin@me.com" &&  password=="123"){
setUser("admin")
localStorage.setItem("loggedInUser" ,JSON.stringify({role : "admin"}))
  console.log(user)
  
}else if(authData && authData.employee.find((e)=>{
 return email === e.email && password === e.password
})){

  setUser("employee")
  console.log(user)
  localStorage.setItem("loggedInUser" ,JSON.stringify({role : "employee"}))
}
else{
  alert("invalid credentials")
}


  }
  


  
return (

    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
     {(user =="admin")? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  );
};

export default App;
