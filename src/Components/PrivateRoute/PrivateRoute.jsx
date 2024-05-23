import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const PrivateRoute = ({children}) => {
  const {user} = useAuth()
  const location = useLocation()
  //console.log(location)

  if(!user){
    return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
  }
  return children 
  
};

export default PrivateRoute;