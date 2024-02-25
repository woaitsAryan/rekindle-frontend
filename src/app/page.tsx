"use client";
import { useState, useRef } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Image from "next/image";
export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentUserInput, setCurrentUserInput] = useState<string>("");
  const [outputData, setOutputData] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<any>(null);
  //   useEffect(()=>{
  //     inputRef.current?.addEventListener('input', resizeInput);
  //     function resizeInput() {
  //         if(inputRef.current)
  //         inputRef.current.style.height = inputRef.current?.value.length/10 + "px";
  // }
  //   },[inputRef.current?.value.length])
  const handleUserTextSubmission = async (e: any) => {
    if (currentUserInput === "") return;
    setMessages([...messages, currentUserInput]);
    AddMessageNode(currentUserInput);
    setIsSubmitted(true);
    setLoading(true);
    const response = await axios.post(
      `http://localhost:8000/journal`,
      {
        text: currentUserInput,
      }
    );
    setLoading(false);
    setOutputData(response.data.response);
    // AddMessageNode(response.data.response);
    setContent(response.data.response);
    setCurrentUserInput("");
  };
  const AddMessageNode = (text: string) => {
    console.log(text);
    const toAddText = document.createElement("div");
    toAddText.innerHTML = text;

    toAddText.setAttribute(
      "style",
      "padding:1rem; background-color:rgba(255,255,255,.1); border-radius:1rem; margin-left:10px;  color:white;"
    );
    const refSec = document.querySelector(".ref-sec");
    refSec?.appendChild(toAddText)
    // sectionRef.current?.appendChild(toAddText);
  };

  return (
    <div className="w-full h-screen bg-bg_primary  p-8 relative flex flex-col  gap-[1.5rem] justify-between">
      <Navbar />
      <div className="heading font-mona_bold tab:text-7xl bg-gradient-to-r from-indigo-700 via-purple-300 to-pink-400 bg-clip-text text-transparent mobile:text-4xl mobile:leading-[3rem] w-full flex justify-center items-center  py-2 text-center">
        How did your day go?
      </div>

      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-12 mx-auto"
        >
          <circle
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="15"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="15"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="15"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      ) : (
        outputData && (
          <div
            className="z-100 bg-[rgba(255,255,255,.1)] p-[1rem] rounded-[1rem] border-2 border-[#aeaeae60] ref-sec text-white h-[80vh] z-[100] mx-auto w-full md:w-[75%] overflow-scroll flex flex-col justify-start items-start gap-[2rem] overflow-x-hidden no-scrollbar text-base md:text-base "
            ref={sectionRef}
          >{content}</div>
        )
      )}
      <div className="flex flex-row justify-center w-full relative items-center z-20">
        <textarea
          className=" resize-none text-white px-[1rem] pr-[3rem] py-[0.5rem] bg-[rgba(255,255,255,0)] rounded-2xl no-scrollbar w-full md:w-[40%] focus:border-primary_text break-words whitespace-pre-wrap h-auto leading-[1.75rem] border-b-2 border-white outline-none"
          placeholder="Write about how your day was."
          onChange={(e) => {
            setCurrentUserInput(e.target.value.toString());
          }}
          value={currentUserInput}
          ref={inputRef}
          rows={4}
        />
        <Image
          src="/images/send.png"
          alt="send"
          width={50}
          height={50}
          className="invert w-4 md:w-6 -translate-x-8 md:-translate-x-12 cursor-pointer"
          onClick={handleUserTextSubmission}
        />
        {/* <button
          type="submit"
          className="rounded-[.5rem] text-white md:h-20 px-4 py-2 bg-[rgba(255,255,255,.1)] w-fit active:scale-[95%] transition-all duration-300 ease-linear"
          onClick={handleUserTextSubmission}
        >
          Enter &nbsp;&crarr;
        </button> */}
      </div>
    </div>
  );
}
