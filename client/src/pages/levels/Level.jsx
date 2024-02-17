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
import { useDispatch,useSelector } from 'react-redux'
import {getQuestions} from "../../services/operations/gameapi"

import QuesModal from '@/components/QuesModal'
const Level = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const [data, setdata] = useState([])
  const {questions} = useSelector((state)=>state.game)
  // console.log("printing lebel questions",questions);
  const handleCard = (data1)=>{
    setOpen(!open)
    setdata(data1)
  }
  const {level} = useSelector((state)=>state.game)
  const {id} = useParams()
  if(level!=id){
    return(
      <div className='w-full flex items-center justify-center text-white' style={{fontFamily:"Hack"}}>
        Not Accessible
      </div>
    );
  }
  useEffect(() => {
    dispatch(getQuestions(id));
  }, [id])
  
  return (
    <div className='w-full h-screen max-w-max p-4 flex flex-col items-start justify-start mx-auto'>
      <div className='w-full flex items-center justify-center'>
        <Card className='w-96'>
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
      <div className='w-full h-full flex items-center justify-center p-4 flex-wrap gap-5 '>
        {
          questions.map((ques,idx)=>(
            <div className='w-screen h-full shadow-lg' onClick={()=> handleCard({ques})} key={idx}>
              <Card>
                <CardContent>
                  <div className='flex flex-col items-center justify-center relative'>
                    <div className=' w-full flex items-center justify-between'>
                      <div className='font-bold text-red-600' style={{fontFamily:"Hack"}}>
                      Question
                      </div>
                      {/* <div>
                        <FaRegLightbulb size={20}/>
                      </div> */}
                    </div>
                    <div className='absolute top-5 left-0 bottom-0' style={{fontFamily:"Hack"}}>
                      {`0${ques.questionNo}`}
                    </div>
                    <div className='p-4'>
                      {ques.question}
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
          ))
        }
      </div>
      {/* <div className='flex items-center justify-center w-full h-full'>
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
      </div> */}
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