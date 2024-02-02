import React from 'react'

const Navbar = () => {
    
const subLinks = [
    {
        title:"Home",
        link:"/catalog/python"
    },
    {
        title:'Login',
        link:"/catalog/webdevelopment"
    },
    {
        title:'Register',
        link:"/catalog/webdevelopment"
    },

]
  return (
    <div className='w-10/12 max-w-full flex h-14 items-center justify-center flex-row  '>
        <div className='w-full p-4 flex flex-row items-center justify-start'>
            {
                subLinks.map((title,key)=>{
                    return(
                        <div key={key} className='text-white p-4' style={{fontFamily:"Hack"}}>
                            {title.title}
                        </div>
                    )
                })
            }

        </div>
        
       

        </div>
  )
}

export default Navbar