// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute2 = ({ children, isUser}) => {

    if(isUser !== {}){
        return (
            <Navigate to={'/'}/>
        )
    }
    return children;

    // const { loading, isAuthenticated, user } = useSelector(state => state.user);
    // return (
    //     <>
    //         {loading === false && (
    //             isAuthenticated === false ? <Navigate to="/login" /> : isAdmin ? user.role !== "admin" ? <Navigate to="/login" /> : children : children
    //         )}
    //     </>
    // );
};

export default ProtectedRoute2;
