// import Card from '@/components/Card'
import React,{useEffect, useState} from 'react'
import img from "../assets/images/bg2.png"
import { Card, CardContent, CardCover, Button , 
  Modal,ModalDialog,DialogTitle,DialogContent,ModalClose,Input} from "@mui/joy"
import { useNavigate } from 'react-router-dom'
import { FcLock } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import { FaLock , FaUnlock } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import game from "../assets/card/404.gif"
import game1 from "../assets/card/bg.png"
import jack from "../assets/card/jack.jpg"
import lady from "../assets/card/lady.jpg"
import laptop from "../assets/card/laptop.jpg"


const Home = () => {
  const dispatch = useDispatch();
  const {questionNo,level} =useSelector((state)=> state.game)
  // console.log("printing",level);
  const [Locked, setLocked] = useState(true)
  const [Locked1, setLocked1] = useState(true)
  const [Locked2, setLocked2] = useState(true)
  const [Locked3, setLocked3] = useState(true)
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    answer:""
  })
  const navigate = useNavigate();
  const {answer} = formData;
  const onchange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
      answer:''
    })
}
useEffect(() => {
}, [level])

  return (
    <>
    <div className='w-[100vw] h-[100vh] mx-auto text-white  flex flex-row 
    items-stretch justify-between max-w-max mt-5 p-4'>
      <div className='relative h-full'>
        <div className='h-full'>
          <div className='w-full h-full'>
            <Card className='w-96 h-[100%]'>
              <CardContent>
                <div className='flex flex-col items-start justify-center w-full h-full'>
                  <div className='flex flex-col items-start justify-center relative'>
                    <div>
                      <h1 className='text-red-600 font-bold text-xl' style={{ fontFamily: "Hack" }}>
                        LEVEL
                      </h1>
                    </div>
                    <div className='-top-3'>
                      <p className='text-4xl' style={{ fontFamily: "Hack" }}>{
                        `00`
                      }</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h1 className='text-black text-3xl align-top' style={{ fontFamily: "Hack" }}>
                      The Reckon Begins
                    </h1>
                    <span style={{ fontFamily: "Hack" }}>
                      UNLOCKED///
                    </span>
                  </div>

                  <div className='mt-11'>
                    <Button
                      color="danger"
                      onClick={()=>navigate('level/0')}
                      variant="solid"
                      size='lg'
                      style={{ fontFamily: "Hack" }} 
                    >
                      Lets' Begin
                      </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col items-center
       justify-evenly'>
        <div className='w-full flex flex-row items-center justify-between'>
          <div className='w-full h-full'>
            <Card className='w-80 shadow-md h-80'>
              <CardCover className='bg-blue-900'>
                {/* <img src={game} className='object-cover'></img> */}
                <img src={jack}></img>
              </CardCover>
              <CardContent>
               <div className='w-full h-full flex flex-col items-start justify-center relative'>
                <div className='text-white'>
                  <h1 className='text-white'>LEVEL</h1>
                  <span className='text-3xl' style={{fontFamily:"Hack"}}>
                    01
                  </span>
                </div>
                <div>
                  <p className='text-white'>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. P
                    ariatur facilis in minima iste harum laudantium fugit unde 
                    explicabo doloribus, atque qui provident natus voluptatibus 
                    libero sapiente soluta, aperiam ex id. */}

                  </p>
                </div>
               {
                level==1 && (
                  <div className='mt-6' >
                  <Button
                  color='danger'
                  variant='solid'
                  size='lg'
                  style={{fontFamily:"Hack"}}
                  onClick={()=> navigate('/level/1')}
                  >
                    Play
                  </Button>
                </div>
                )
               }
                <div className='absolute text-white top-0 right-0 h-full'>
                 <div className='text-2xl' >
                 {
                  level!=1 ? (<FaLock/>) : (<FaUnlock/>)
                 }
                 </div>

                </div>
               </div>
              </CardContent>
            </Card>
          </div>
          <div>
          <Card className='w-80 shadow-md h-80'>
              <CardCover className='bg-blue-900'>
                <img src={laptop}></img>
              </CardCover>
              <CardContent>
               <div className='w-full h-full flex flex-col items-start justify-center relative'>
                <div className='text-white'>
                  <h1 className='text-white'>LEVEL</h1>
                  <span className='text-3xl' style={{fontFamily:"Hack"}}>
                    02
                  </span>
                </div>
                <div>
                  <p className='text-white'>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. P
                    ariatur facilis in minima iste harum laudantium fugit unde 
                    explicabo doloribus, atque qui provident natus voluptatibus 
                    libero sapiente soluta, aperiam ex id. */}

                  </p>
                </div>
               {
                level==2 && (
                  <div className='mt-6' >
                  <Button
                  color='danger'
                  variant='solid'
                  size='lg'
                  style={{fontFamily:"Hack"}}
                  onClick={()=> navigate('/level/2')}
                  >
                    Play
                    
                  </Button>
                </div>
                )
               }
                <div className='absolute text-white top-0 right-0 h-full'>
                 <div className='text-2xl' >
                 {
                  level!=2 ? (<FaLock/>) : (<FaUnlock/>)
                 }
                 </div>

                </div>
               </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
          <Card className='w-80 shadow-md h-80'>
              <CardCover className='bg-blue-900'>
                {/* <img src={img}></img> */}
              </CardCover>
              <CardContent>
               <div className='w-full h-full flex flex-col items-start justify-center relative'>
                <div className='text-white'>
                  <h1 className='text-white'>LEVEL</h1>
                  <span className='text-3xl' style={{fontFamily:"Hack"}}>
                    03
                  </span>
                </div>
                <div>
                  <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. P
                    ariatur facilis in minima iste harum laudantium fugit unde 
                    explicabo doloribus, atque qui provident natus voluptatibus 
                    libero sapiente soluta, aperiam ex id.

                  </p>
                </div>
               {
                level==3 && (
                  <div className='mt-6' >
                  <Button
                  color='danger'
                  variant='solid'
                  size='lg'
                  style={{fontFamily:"Hack"}}
                  onClick={()=> navigate('/level/3')}
                  >
                    Play
                    
                  </Button>
                </div>
                )
               }
                <div className='absolute text-white top-0 right-0 h-full'>
                 <div className='text-2xl' >
                 {
                 level!=3 ? (<FaLock/>) : (<FaUnlock/>)
                 }
                 </div>
                </div>
               </div>
              </CardContent>
            </Card>
          </div>
          <div>
          <Card className='w-80 shadow-md h-80'>
              <CardCover className='bg-blue-900'>
                {/* <img src={img}></img> */}
              </CardCover>
              <CardContent>
               <div className='w-full h-full flex flex-col items-start justify-center relative'>
                <div className='text-white'>
                  <h1 className='text-white'>LEVEL</h1>
                  <span className='text-3xl' style={{fontFamily:"Hack"}}>
                    04
                  </span>
                </div>
                <div>
                  <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. P
                    ariatur facilis in minima iste harum laudantium fugit unde 
                    explicabo doloribus, atque qui provident natus voluptatibus 
                    libero sapiente soluta, aperiam ex id.

                  </p>
                </div>
               {
                level==4 && (
                  <div className='mt-6' >
                  <Button
                  color='danger'
                  variant='solid'
                  size='lg'
                  style={{fontFamily:"Hack"}}
                  onClick={()=> navigate('/level/4')}
                  >
                    Play
                    
                  </Button>
                </div>
                )
               }
                <div className='absolute text-white top-0 right-0 h-full'>
                 <div className='text-2xl' >
                 {
                  level!=4 ? (<FaLock/>) : (<FaUnlock/>)
                 }
                 </div>

                </div>
               </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    
    </div>

<Modal disableAutoFocus={true} open={open} onClose={()=>setOpen(false)} 
className='w-[50%] h-full 
mx-auto text-white flex items-center justify-center' slotProps={{backdrop:{
  sx:{
    backdropFilter:"none",
    transition:"linear 4000ms",
    
  }
}}}>
  <ModalDialog className='bg-red-500'>
  <DialogTitle>
  Question 1
</DialogTitle>
<DialogContent>
  <div className='w-full flex items-start justify-center flex-col gap-3 '>
    <div>
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit, atque suscipit quas debitis 
      tempore illo ut at perspiciatis voluptates
       expedita eius voluptate est accusantium?
    </h1>
    </div>
    <div>
      <form onSubmit={handlesubmit}>
        <Input placeholder='Enter the Matrix' required 
        name='answer' 
        onChange={onchange} 
        value={answer}  ></Input>
        <div className='mt-4'>
        <Button type='submit'>Submit</Button>
        </div>
        
      </form>
    </div>
    
  </div>
</DialogContent>

  </ModalDialog>




</Modal>
</>
  )
}

export default Home