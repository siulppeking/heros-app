import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuhtContext'
import { Navigate } from 'react-router-dom';

const PublicRouter = ({ children }) => {

    const { logged } = useContext(AuthContext);
    return (!logged) ? children : <Navigate to={'/marvel'} />
}

export default PublicRouter