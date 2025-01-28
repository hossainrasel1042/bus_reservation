import React from 'react'
import { BookingProvider } from '../components/BookingContext'
import Navbar from '../components/Navbar'
import { Outlet,useLocation } from 'react-router'
import useAuthRedirect from '../components/useAuthRedirect'
const User = () => {
    useAuthRedirect();
    const location=useLocation();
  return (
    <BookingProvider>
    <div className="w-screen h-screen flex overflow-x-hidden">
        <div className="w-[250px] fixed top-0 left-0 h-screen">
          <Navbar path={location.pathname} />
        </div>
        <div className="ml-[250px] w-full">
        <Outlet/>
        </div>
      </div>
      </BookingProvider>
  )
}

export default User