import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[60px] p-[18px] flex gap-10 justify-end'>
      <div className="flex-1 w-full">
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
    <button className='w-[180px] h-[45px] bg-orange-500 text-[18px] rounded-[30px] flex justify-center items-center text-white inter font-bold'>Live Chat</button>
    </div>
  )
}

export default Header