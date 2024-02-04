// import Card from '@/components/Card'
import React,{useState} from 'react'
import img from "../assets/images/bg2.png"
import { Card, CardContent, CardCover, Button , 
  Modal,ModalDialog,DialogTitle,DialogContent,ModalClose} from "@mui/joy"


const Home = () => {
  const [open, setOpen] = useState(false)
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
                      <p className='text-4xl' style={{ fontFamily: "Hack" }}>01</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h1 className='text-black text-3xl align-top' style={{ fontFamily: "Hack" }}>
                      Lorem Ipsum Begins
                    </h1>
                    <span style={{ fontFamily: "Hack" }}>
                      UNLOCKED///
                    </span>
                  </div>

                  <div className='mt-11'>
                    <Button
                      color="danger"
                      onClick={()=>setOpen(true)}
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
                {/* <img src={img}></img> */}
              </CardCover>
              <CardContent>
               <div className='w-full h-full flex flex-col items-start justify-center'>
                <div className='text-white' style={{fontFamily:"Hack"}}>
                  <h1 className='text-white'>Question</h1>
                  <span className='text-3xl'>
                    01
                  </span>
                </div>
               </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className='w-80 h-80'></Card>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <Card className='w-80 h-80'></Card>
          </div>
          <div>
            <Card className='w-80 h-80'></Card>
          </div>
        </div>


      </div>
    
    </div>

<Modal disableAutoFocus:true open={open} onClose={()=>setOpen(false)} 
className='w-[50%] h-full 
mx-auto text-white flex items-center justify-center'>
  <ModalDialog>
  <DialogTitle>
  Question 1
</DialogTitle>
<DialogContent>
  <div>
    <h1>
      Hye welcome to center teh doa
    </h1>
  </div>
</DialogContent>

  </ModalDialog>




</Modal>
</>
  )
}

export default Home