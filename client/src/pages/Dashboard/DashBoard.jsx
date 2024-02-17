import React from 'react'
import avatar from "../../assets/dashboard/avatar.png"
import computer from "../../assets/dashboard/computer.png"
import { IoMailSharp } from "react-icons/io5";
import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Line } from "react-chartjs-2"
import { BsPersonLinesFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const data = [
    {
        "label": "TeamA",
        "value": 200,
    },
    {
        "label": "TeamB",
        "value": 300,
    },
    {
        "label": "TeamC",
        "value": 800,
    },
]
const DashBoard = () => {
    const {level,teamname,score,flagsCaptured,email} = useSelector((state)=>state.game)
 
    return (
        <div className='w-full h-screen flex flex-col items-start justify-between max-w-max mx-auto'>
            {/* photo & notifications */}
            <div className='w-full flex items-center justify-between mx-auto p-4 gap-6'>
                {/* photo */}
                <div className='w-[950px] h-[400px] border border-gray-500
                bg-red-700
                 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-opacity-30 backdrop-blur-lg hover:scale-110 z-10'>
                    <div className='w-full flex flex-col items-start justify-center mx-auto p-4'>
                        <div className='p-4'>
                            <h1 className='text-2xl text-white' style={{fontFamily:"Hack"}}>{
                                `Welcome  ${email}`
                            }</h1>
                        </div>
                        <div className='w-full mx-auto'>
                            <div className='p-4'>
                                <img src={avatar} width={150} loading='lazy'></img>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center mx-auto mt-7  max-w-max'>
                            <div className=' w-full flex items-center justify-evenly  flex-wrap max-w-max gap-5 text-white' style={{fontFamily:"Hack"}}>
                                <div className='flex flex-col items-center justify-center'>
                                    <div>
                                        Team
                                    </div>
                                    <div>
                                        {teamname}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center p-1'>
                                    <div>
                                        Current Level
                                    </div>
                                    <div>
                                        {`0${level}`}
                                    </div>

                                </div>
                                {/* <div className='flex flex-col items-center justify-center'>
                                    <div>
                                        Hints
                                    </div>
                                    <div>
                                        12
                                    </div>

                                </div> */}
                                <div className='flex flex-col items-center justify-center'>
                                    <div>
                                        Flags Captured
                                    </div>
                                    <div>
                                        {flagsCaptured}
                                    </div>

                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <div>
                                        Score
                                    </div>
                                    <div>
                                        {score}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* notification */}
                {/* <div className=' w-full flex flex-col items-start justify-start
                  h-[500px] bg-opacity-30 backdrop-blur-lg text-white border border-gray-500 bg-blue-600 
                 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                    <div className='flex items-center justify-center p-4'>
                        <div>
                            <IoMailSharp size={40} />
                        </div>
                        <div className='text-white font-bold text-3xl'>
                            Notifications
                        </div>
                    </div>
                    <div className='flex items-start justify-start gap-6  p-4'>
                        <div>
                            <img src={computer} width={30}></img>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div>
                                Flag Captured 10:41 AM
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum architecto natus vitae,
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-start gap-6  p-4'>
                        <div>
                            <img src={computer} width={30}></img>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div>
                                Flag Captured 10:41 AM
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum architecto natus vitae,
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-start gap-6  p-4'>
                        <div>
                            <img src={computer} width={30}></img>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div>
                                Flag Captured 10:41 AM
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum architecto natus vitae,
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-start gap-6  p-4'>
                        <div>
                            <img src={computer} width={30}></img>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div>
                                Flag Captured 10:41 AM
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum architecto natus vitae,
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-start gap-6  p-4'>
                        <div>
                            <img src={computer} width={30}></img>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div>
                                Flag Captured 10:41 AM
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum architecto natus vitae,
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            
            <div className='w-full flex items-start justify-between max-w-max mx-auto p-4 gap-6 '>
                {/* chart */}
                <div className=' w-full flex items-center justify-center p-7 text-white
                 bg-opacity-30 backdrop-blur-lg border border-gray-500 '>
                    <Bar
                        data={{

                            labels: data.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Score",
                                    data: data.map((data) => data.value),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 205, 86, 0.2)',
                                    ],
                                    borderRadius: 5,
                                    hoverBackgroundColor: [
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                    ]
                                },
                            
                            ],
                            
                            // xlabel
                            // labels:["Team A", "Team B","TeamC"],
                            // // yaxis
                            // datasets:[
                            //     {
                            //         label:"Points",
                            //         data:[200,300,500]
                            //     }
                            // ]
                        }}
                    >

                    </Bar>

                </div>
                {/* team details */}
                <div  className='flex flex-col items-start justify-between p-2
                  w-[600px] mt-8 border border-gray-500 bg-opacity-30 text-white bg-pink-600
                  backdrop-blur-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]' >
                    <div className='w-full flex items-center justify-start gap-3'>
                        <div>
                            <BsPersonLinesFill size={30}></BsPersonLinesFill>
                        </div>
                        <div className='text-2xl font-bold'>
                            Team Details
                        </div>
                        
                    </div>
                    <div className='mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae suscipit ipsum reiciendis quibusdam ex ea
                         aspernatur totam ipsam? Exercitationem omnis odio 
                         laudantium earum nostrum numquam, temporibus porro ea. Iure, doloribus?
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default DashBoard