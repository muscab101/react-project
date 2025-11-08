import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from "../constants"
import{ Menu, X} from "lucide-react"
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  
}

  return (
    <div>
      <nav className="fixed top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-800 w-full">
       <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
            <div className="flex item-center ">
                <img className="h-10 w-10 mr-2 " src={logo} alt="" />
                <span className="text-xl mt-2 ">VirtualR</span>
            </div>
            <ul className="hidden lg:flex space-x-10 ml-14 mt-2 ">
                {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-7 item-center">
              <a href="#" className='w-[70px] h-[35px] border rounded-md text-center pt-[6px]' >Sing In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 w-[120px] h-[35px] text-center pt-[6px] rounded-md" >Create an account</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end mt-2">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
        {isOpen && (
          <div className=" fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center item-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-8 justify-center mt-[1rem]">
              <a href="#" className='w-[70px] h-[35px] border-gray-600 border-1 rounded-md text-center pt-[6px]' >Sing In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 w-[120px] h-[35px] text-center pt-[6px] rounded-md" >Create an account</a>
            </div>
          </div>
        )}
       </div>
      </nav>
    </div>
  )
}

export default Navbar
