"use client"
import EmotionCard from "./components/EmotionCard";
import Navbar from "./components/Navbar";
import { useState,useEffect, useRef } from "react";
 export default function Home() {
  const [messages,setMessages]=useState<string[]>([]);
  const [currentUserInput,setCurrentUserInput]=useState<string>('')
  const [outputData,setOutputData]=useState<string>('')
  const sectionRef=useRef<HTMLDivElement>(null)

  const handleUserTextSubmission=async(e:any)=>{
    setMessages([...messages,currentUserInput])
    AddMessageNode(currentUserInput)
    //await request then add message
    setOutputData('a')
    AddMessageNode('whatever is output')

  }
  const AddMessageNode=(text:string)=>{
    const toAddText=document.createElement('div')
    toAddText.innerHTML=text;
    toAddText.setAttribute('style','padding:1rem; background-color:#845d48; border-top-left-radius:1rem; border-top-right-radius:1rem; margin-left:10px; border-botton-right-radius:1rem;')
    sectionRef.current?.appendChild(toAddText)
  } 
  return (
    <div className="w-full h-screen bg-bg_primary rounded-2xl p-8 relative flex flex-col  gap-[.7rem]">
      <Navbar />
      <div className="heading font-mona_bold text-4xl text-primary_text">
        Tell me about your day
      </div>
      <div className="h-[85vh] w-[95%] border-[2px] border-black overflow-scroll flex flex-col justify-start items-start gap-[2rem]" ref={sectionRef}>
      {

      }
      </div>
      <div className="flex flex-col-reverse justify-center w-full gap-[2rem] relative" >
      
        <button type="submit" className="rounded-[.5rem] text-white px-4 py-2 bg-primary_text w-fit top-0 absolute" onClick={handleUserTextSubmission}>Enter</button>
        <input type="text" className=" px-[1rem] py-[0.5rem]  rounded-lg translate-x-[10%] w-[80%] focus:border-primary_text" placeholder="How has your day been" onChange={(e)=>{
        setCurrentUserInput(e.target.value.toString())
        }} value={currentUserInput}/>
      </div>
      
    </div>
  );
}
