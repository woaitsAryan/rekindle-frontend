"use client"
import { useState,useEffect, useRef } from "react";
 export default function Home() {
  const [messages,setMessages]=useState<string[]>([]);
  const [currentUserInput,setCurrentUserInput]=useState<string>('')
  const [outputData,setOutputData]=useState<string>('')
  const sectionRef=useRef<HTMLDivElement>(null)
  const inputRef =useRef<HTMLTextAreaElement>(null);
//   useEffect(()=>{
//     inputRef.current?.addEventListener('input', resizeInput); 
//     function resizeInput() {
//         if(inputRef.current)
//         inputRef.current.style.height = inputRef.current?.value.length/10 + "px";
// }
//   },[inputRef.current?.value.length])
  const handleUserTextSubmission=async(e:any)=>{
    if(currentUserInput==="")
    return;
    setMessages([...messages,currentUserInput])
    AddMessageNode(currentUserInput)
    //await request then add message
    setOutputData('a')
    AddMessageNode('whatever is output')

  }
  const AddMessageNode=(text:string)=>{
    const toAddText=document.createElement('div')
    toAddText.innerHTML=text;
    toAddText.setAttribute('style','padding:1rem; background-color:rgba(255,255,255,.1); border-radius:1rem; margin-left:10px;  color:white;')
    sectionRef.current?.appendChild(toAddText)
  } 

  return (
    <div className="w-full h-screen bg-bg_primary  p-8 relative flex flex-col  gap-[1.5rem] ">
      <div className="heading font-mona_bold tab:text-7xl bg-gradient-to-r from-indigo-700 via-purple-300 to-pink-400 bg-clip-text text-transparent mobile:text-4xl mobile:leading-[3rem] w-full flex justify-center items-center">
        Hello User <br/>
        Tell me about your day
      </div>
      <div className="h-[85vh] w-[95%] overflow-scroll flex flex-col justify-start items-start gap-[2rem] overflow-x-hidden no-scrollbar " ref={sectionRef}>
      {

      }
      </div>
      <div className="flex justify-start w-full relative items-center" >
      
        <button type="submit" className="rounded-[.5rem] text-white px-4 py-2 bg-[rgba(255,255,255,.1)] w-fit h-fit " onClick={handleUserTextSubmission}>Enter</button>
        <textarea rows={3} cols={50} className=" resize-none text-white px-[1rem] py-[0.5rem] bg-[rgba(255,255,255,.1)] rounded-2xl no-scrollbar translate-x-[10%] w-[80%] focus:border-primary_text break-words whitespace-pre-wrap h-auto leading-[1.75rem]" placeholder="How has your day been" onChange={(e)=>{
        setCurrentUserInput(e.target.value.toString())
        }} value={currentUserInput} ref={inputRef}/>
      </div>
      
    </div>
  );
}
