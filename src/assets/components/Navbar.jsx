import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
const list=[
    {name:'Overview',
    path:"/user/overview"
    },
    {name:'Booking',
      path:'/user/Booking'
      },
    {name:'My Bookings',
      path:'/user/mybooking'
    },
   { name:'Setting',
    path:'/user/settings'
   }
]
const Navbar = ({path}) => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
    const [active, setactive] = useState(0)
  return (
    <div className="w-[250px] flex flex-col justify-between py-6 items-center h-screen bg-[#3C3C3C] rounded-tr-[30px] rounded-br-[30px] fixed top-0 left-0">
        <h1 className="aclonica text-[38px] text-white">
          <span className="text-[#FF8E48]">R</span>obin
        </h1>
        <ul className="flex flex-col items-center gap-4">
          {list.map((elem, key) => {
            return (
              <Link to={`${elem.path}`}
                className={`inter font-bold ${
                  elem.path === path ? "text-[#FF8E48]" : "text-white"
                }`}
                key={key}
              >
                {elem.name}
              </Link>
            );
          })}
        </ul>
        <div className="flex flex-col items-center gap-3">
          <div className="size-[140px] rounded-full border-black border-2 border-solid"></div>
          <h3 className="inter text-white font-bold">Hossain Rasel</h3>
          <button onClick={handleLogout} className="w-[180px] h-[45px] bg-orange-500 text-[18px] rounded-[30px] flex justify-center items-center text-white inter font-bold">
            Log Out
          </button>
        </div>
      </div>
  )
}

export default Navbar