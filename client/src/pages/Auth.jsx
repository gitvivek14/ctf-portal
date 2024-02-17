import React from 'react'
import Particle from '@/components/Particle'
import { TypeAnimation } from 'react-type-animation';
import Form from '../components/Form';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';



const Auth = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full mx-auto'>
            <Navbar></Navbar>
            <div className='-z-10'>
                <Particle></Particle>
            </div>
            <div className='z-10 flex flex-col items-start justify-start mt-9 p-4 '>
                <TypeAnimation
                sequence={[
                    'Capture the Flag',
                    1000,
                    'Reckon'
                ]}
                wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', color:"red",fontFamily:"Hack" }}
        repeat={Infinity}
                
                >

                </TypeAnimation>
            </div>
            <div className='flex flex-col items-center justify-start max-w-[40%] p-5'>
                {/* <div>
                    <p className='text-white' style={{ fontFamily: "Hack" }}>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Libero vel corporis necessitatibus. Hic error voluptatem sequi porro possimus fuga!
                        Mollitia blanditiis porro placeat accusamus praesentium
                        cupiditate delectus hic, exercitationem soluta.
                    </p>

                </div> */}
            </div>
            <div className='flex flex-row items-center justify-start p-4 max-w-[40%]'>
                <div className=''>
                    <Button></Button>
                </div>
                <div>
                    <button className="bg-green-950 text-green-400 border
             border-green-400 border-b-4 font-medium 
             overflow-hidden relative px-4 py-2 
             rounded-md hover:brightness-150 hover:border-t-4 
             hover:border-b active:opacity-75 outline-none duration-300 group" onClick={()=>navigate('/login')}>
                        <span class="bg-green-400 shadow-green-400 absolute 
                        -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md 
                        opacity-50 group-hover:top-[150%] duration-500
                         shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Log In
                    </button>
                </div>

            </div>


            <div className='w-full mx-auto my-auto flex items-center justify-center mt-16 z-20'>
                <Form></Form>
            </div>
        </div>

    )

}

export default Auth