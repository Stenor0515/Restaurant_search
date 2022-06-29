import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const [cookies, setCookie] = useCookies("user")
  if (!cookies.Name) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/login' />
  }

  // logged in so return component
  return <Outlet />
}

export { PrivateRoute };