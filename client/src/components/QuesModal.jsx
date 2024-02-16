import React, { useRef,useState } from 'react'
import { ImCross } from "react-icons/im"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const QuesModal = ({setOpen,data}) => {
    console.log(data);
    const [formData, setFormData] = useState({
        flag:""
    })
    const {flag} = formData;
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
      }
    const modalref = useRef();
    const closeModal = (e)=>{
        if(modalref.current===e.target){
            console.log("closing");
            setOpen(false);
        }
    }
    
    return (
        <div ref={modalref} onClick={closeModal} className='w-screen fixed inset-0 z-10
         bg-black bg-opacity-30 backdrop-blur-sm flex 
         justify-center items-center h-full'>
            <div className='flex flex-col gap-2 text-white bg-purple-700 bg-opacity-30 rounded-lg w-[600px]'>
                <div className='place-self-end p-4'>
                    <button onClick={()=>closeModal()}>
                        <ImCross></ImCross>
                    </button>
                </div>
                <div className='w-full mx-auto flex flex-col items-center justify-center' style={{fontFamily:"Hack"}}>
                    <div className='text-xl'>
                        Question
                    </div>
                    <div className='text-lg'>
                        01
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center justify-evenly p-4 mx-auto'>
                    <div>
                        <p style={{ fontFamily: "Hack" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rem porro nemo nisi quibusdam quod ratione ducimus\
                            excepturi accusamus, dolorum reprehenderit
                            illo voluptatibus tempora cupiditate quaerat eligendi eos? Veniam, nam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, rerum et quidem optio blanditiis maiores vitae sapiente voluptatem, incidunt quam culpa molestias
                            inventore veniam velit, illo quis. Atque, excepturi consectetur?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam earum consequatur dolores incidunt! Temporibus, minima. Eveniet possimus numquam rem delectus dignissimos.
                            Rerum nulla doloremque unde, aspernatur in omnis ducimus.
                        </p>
                    </div>

                    <div className='w-full flex flex-col items-center justify-center mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className='w-full mx-auto' style={{fontFamily:"Hack"}}>
                            <input
                                placeholder="Flag"
                                className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg
                                 text-white px-6 py-3 text-base hover:border-[#fff] 
                                 cursor-pointer transition" style={{fontFamily:"Hack"}}
                                    type="text"
                                value={flag}
                                name='flag'
                                onChange={handleOnChange}
                            />
                            </div>
                            
                            <div className=' w-full mx-auto p-2'>
                            <button type='submit' className="bg-lime-950 text-lime-400 border
                             border-lime-400 border-b-4 font-medium overflow-hidden
                              relative px-6 py-2 rounded-md hover:brightness-150 hover:border-t-4 
                            hover:border-b active:opacity-75 outline-none duration-300 group" style={{fontFamily:"Hack"}}>
                                <span class="bg-lime-400 shadow-lime-400 absolute 
                                -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 
                                group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Submit
                            </button>
                            </div>
                            
                        </form>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default QuesModal