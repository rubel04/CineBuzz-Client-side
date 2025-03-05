import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../COMPONENTS/LoadingSpinner";

const PrivateRoute = (props) => {
    const {children} = props || {};
    const {pathname} = useLocation();
    const {user,isLoading} = useContext(AuthContext);
    if (isLoading) {
        // return <div className="mt-24 flex justify-center"><span className="loading loading-dots loading-xl"></span></div>
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={pathname}></Navigate>
    );
};

export default PrivateRoute;