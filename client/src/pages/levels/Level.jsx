import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardCover, Button , 
  Modal,ModalDialog,DialogTitle,DialogContent,ModalClose,Input} from "@mui/joy"
import  thunder from "../../assets/powerups/thunder.png"
import  spades from "../../assets/powerups/spades.png"
import  hunt from "../../assets/powerups/hunt.png"
import  doll from "../../assets/powerups/doll.png"
import  piggybank from "../../assets/powerups/piggybank.png"
import { FaRegLightbulb } from "react-icons/fa";

import QuesModal from '@/components/QuesModal'
const Level = () => {
  const [open, setOpen] = useState(false)
  const [data, setdata] = useState({})
  const handleCard = (data1)=>{
    setOpen(!open)
    setdata(data1)
  }
  const {id} = useParams()
  const ques = [
    {
      question:"What is me",
      no:"1"
    },
    {
      question:"What is me",
      no:"2"
    },
    {
      question:"What is me",
      no:"3"
    },
    {
      question:"What is me",
      no:"4"
    },
  ]
  return (
    <div className='w-screen h-screen max-w-max p-4 flex flex-col items-start justify-start overflow-x-auto overflow-y-auto'>
      <div className='w-full flex items-center justify-center'>
        <Card className="w-96">
          <CardContent>
            <div className='flex flex-col items-start justify-center p-2'>
              <div className='text-red-600 text-3xl' style={{fontFamily:"Hack"}}>
                LEVEL
              </div>
              <span style={{fontFamily:"Hack"}}>
                {
                  `0${id}`
                }
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='w-[100%] h-full flex items-center justify-center p-7 gap-5 '>
        {
          ques.map((ques,idx)=>(
            <div className='w-full h-full hover:scale-110 shadow-lg' onClick={()=> handleCard({ques})} key={idx}>
              <Card>
                <CardContent>
                  <div className='flex flex-col items-center justify-center relative'>
                    <div className=' w-full flex items-center justify-between'>
                      <div className='font-bold text-red-600' style={{fontFamily:"Hack"}}>
                      Question
                      </div>
                      <div>
                        <FaRegLightbulb size={20}/>
                      </div>
                    </div>
                    <div className='absolute top-5 left-0 bottom-0' style={{fontFamily:"Hack"}}>
                      {`0${ques.no}`}
                    </div>
                    <div className='p-4'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aliquid, error sunt exercitationem, distinctio 
                      consequatur pariatur soluta, minima eligendi 
                      expedita corporis in unde obcaecati laudantium sed! Iste id recusandae tempora?
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
          ))
        }
      </div>
      <div className='flex items-center justify-center w-full h-full'>
        <div>
          <button>
            <div className='hover:scale-150 transition-all ease-in'>
              <img src={thunder} width={100}></img>
            </div>
          </button>
        </div>
        <div>
          <button>
            <div className='hover:scale-150 transition-all ease-in'>
              <img src={doll} width={100}></img>
            </div>
          </button>
        </div>
        <div>
          <button>
            <div className='hover:scale-150 transition-all ease-in'>
              <img src={piggybank} width={100}></img>
            </div>
          </button>
        </div>
      </div>
      <div>
      </div>
      {
        open && (
          <QuesModal setOpen={setOpen} data={data}></QuesModal>
        )
      }
    </div>
  )
}

export default Level