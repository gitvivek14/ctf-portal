import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardCover, Button , 
  Modal,ModalDialog,DialogTitle,DialogContent,ModalClose,Input} from "@mui/joy"
import { Car } from 'lucide-react'

const Level = () => {
  const { id } = useParams()
  const [Question, setQuestion] = useState({
    question:"Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Iusto mollitia qui distinctio reprehenderit earum ullam itaque error...",
    questionNo: 2,
     Link:"www.google.com"

  })
  const [QuestionNo, setQuestionNo] = useState(1)
  // setQuestion({
  //   Question:"What is your Name?",
  //   QuestionNo: 2,
  //   Link:"www.google.com"
  // })

  const submit = ()=>{
    console.log("submit");
  }
  useEffect(() => {
    setQuestion({
      question:ques[QuestionNo-1].question,
      questionNo:QuestionNo
    })
    submit();
  }, [QuestionNo])
  
  const ques = [
    {
      question : "what is name?",
      no:1
    },
    {
      question : "what is name2?",
      no:2
    },
    {
      question : "what is name3?",
      no:3
    },
    {
      question : "what is name4?",
      no:4
    },
  ]
  console.log(id);
  console.log(Question);
  return (
  <div className='w-full mx-auto flex flex-row items-center justify-center mt-5 p-2'>
    <div className=''>
      <Card className="w-96 h-[600px]">
        <CardContent>
          <div className='flex flex-col items-start justify-center'>
            <div className='text-3xl text-red-500' style={{fontFamily:"Hack"}}>
              LEVEL
            </div>
            <span className='font-bold text-xl ' style={{fontFamily:"Hack"}}>
              {
                `0${id}`
              }
            </span>
            </div>
        </CardContent>
      </Card>

    </div>
    <div className='relative flex flex-col flex-wrap items-center justify-center gap-4'>
      {
        ques.map((ques,key)=>(
          <div key={key} onClick={()=> setQuestionNo(ques.no)}>
            <Card className="w-96 h-[150px]">
              <CardContent>
                <div className='flex flex-col items-start justify-center'>
                  <div className='text-xl' style={{fontFamily:"Hack"}}>
                    Question
                  </div>
                  <span className='text-lg font-bold' style={{fontFamily:"Hack"}}>
                  {
                    `0${ques.no}`
                  }
                  </span>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Iusto mollitia qui 
                    distinctio reprehenderit earum ullam itaque error... 
                    
                   
                  </div>
                  {/* <div className='p-3'>
                    <Button 
                    size='lg'
                    variant='solid'
                    color='danger'
                    >
                      Solve the matrix
                    </Button>
                  </div> */}

                </div>

              </CardContent>
            </Card>
            </div>
        ))
      }

    </div>

    <div>
      <Card>
        <CardContent>
          <div className=' w-full flex flex-col items-start justify-center max-w-max'>
          <div>
            {
              Question && (
                <div className='flex flex-col items-center justify-start flex-wrap'>
                  <div style={{fontFamily:"Hack"}}>
                    Question
                    </div>
                    <span style={{fontFamily:"Hack"}}>
                      {
                        `0${QuestionNo}`
                      }
                     
                    </span>
                    <div>
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod inventore quasi iste, aliquid itaque dignissimos 
                      officiis non nulla impedit exercitationem quaerat 
                      debitis eaque, ullam autem esse eligendi delectus labore. */}
                      {Question.question}
                      </div>

                    <div className='p-3'>

                      <Input variant='outlined' color='danger' size='md' placeholder='Fla'>
                      </Input>
                      </div>
                    <div className='flex items-center justify-center gap-4'>
                      <Button size='md'
                      color='warning'
                      variant='solid'
                      >
                        Resources
                      </Button>
                      <Button size='md'
                      color='danger'
                      variant='solid'
                      >
                        Submit
                      </Button>

                      </div>

                  </div>
              )
            }

          </div>

          </div>
        </CardContent>
      </Card>
    </div>

  </div>
  )
}
export default Level