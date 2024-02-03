import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
const subLinks = [
    {
        title:"Home",
        link:"/home"
    },
    {
        title:'Login',
        link:"/login"
    },
    {
        title:'Register',
        link:"/signup"
    },

]
  return (
    <div className='w-10/12 max-w-full flex h-14 items-center justify-center flex-row  '>
        <div className='w-full p-4 flex flex-row items-center justify-start'>
            {
                subLinks.map((links,key)=>{
                    return(
                        <Link to={links.link}>
                        <div key={key} className='text-white p-4' style={{fontFamily:"Hack"}}>
                            {links.title}
                        </div>
                        </Link>
                    )
                })
            }

        </div>
        
       

        </div>
  )
}

export default Navbar