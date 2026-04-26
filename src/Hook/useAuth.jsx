
import { use } from "react";
import { AuthContext } from "../component/Context/AuthContext";


const useAuth = () => { 
    const authInfo=use(AuthContext);
    return authInfo;
};

export default useAuth;