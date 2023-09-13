

export const PublicRoutes = ({ children }) => {


    const logged = false;


    return (!logged)
        ? children
        : <Navigate to='/dashboard' />

}
