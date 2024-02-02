import React from 'react'
import Particle from '@/components/Particle'
import { HackerEffectText } from "@nekzus/react-hacker-effect"
import { HackText } from "react-hacker-text-effect";
import  Form  from '../components/Form';
import Navbar from '@/components/Navbar';



const Auth = () => {
    return (
        <div className='w-full h-full'>
            <Navbar></Navbar>
            <div className='-z-10'>
                <Particle></Particle>
            </div>
            <div className='z-10 flex flex-col items-start justify-start mt-9 p-4 '>
                <HackText word='Capture the Flag'/>
            </div>
            <div className='w-full mx-auto my-auto flex items-center justify-center mt-16 z-20'>
                <Form></Form>
            </div>
        </div>

    )

}

export default Auth