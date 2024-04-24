"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Image from "next/image";
import backend from "../../lib/axios";
import { toast } from "react-toastify";
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
    // const toastID = toast.info("Processing your request", {
    //   autoClose: false
    // }
    // )
    const response = await backend.post(
      "/journal",
      {
        text: currentUserInput,
      }
    );
    // toast.update(toastID, {
    //   render: 'Response fetched',
    //   type: toast.TYPE.SUCCESS,
    //   autoClose: 5000
    // });
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
    refSec?.appendChild(toAddText);
    // sectionRef.current?.appendChild(toAddText);
  };
  const [salutation, setSalutation] = useState("Good Morning,");
  useEffect(() => {
    
    const current = new Date();
    const time = current.getHours();
    if (time > 0 && time < 12) {
      setSalutation("Good Morning, Aryan");
    } else if (time > 12 && time < 4) {
      setSalutation("Good Afternoon, Aryan");
    } else {
      setSalutation("Good Evening, Aryan");
    }
  }, []);
  return (
    <div className="w-full overflow-hidden h-screen bg-bg_primary  p-8 relative flex flex-col  gap-[2rem]">
      <Navbar />
      {!outputData && !loading && (
        <div className="heading tab:text-6xl mobile:text-3xl mobile:leading-[3rem] w-full flex justify-center items-center  py-2 text-center font-coperHead absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
          {salutation}
          <br />
          How was your day?
        </div>
      )}

      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-12 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            fill="#ba5b38"
            stroke="#ba5b38"
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
            fill="#ba5b38"
            stroke="#ba5b38"
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
            fill="#ba5b38"
            stroke="#ba5b38"
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
            className="z-100 bg-white p-[1rem] rounded-[1rem] border-2 border-outline ref-sec text-primary_text font-coperHead h-[40vh] z-[100] mx-auto w-full md:w-[75%] overflow-scroll flex flex-col justify-start items-start gap-[2rem] overflow-x-hidden no-scrollbar text-base md:text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ref={sectionRef}
          >
            {content}
          </div>
        )
      )}
      <div className="flex flex-row justify-center w-full items-center z-20 absolute bottom-0 ">
        <textarea
          className=" resize-none px-[1rem] pr-[3rem] py-[0.5rem] bg-white border-outline  rounded-2xl rounded-b-none no-scrollbar w-full md:w-[80%] lg:w-[50%] focus:border-outline break-words whitespace-pre-wrap h-auto leading-[1.75rem] border-2 active:border-outline outline-none text-primary_text "
          placeholder="Reflect on something you learned, realized, or felt gratitude for today."
          onChange={(e) => {
            setCurrentUserInput(e.target.value.toString());
          }}
          value={currentUserInput}
          ref={inputRef}
          rows={4}
        />
        <button
          onClick={handleUserTextSubmission}
          className="bg-btn -translate-x-12 md:-translate-x-20 cursor-pointer p-3 rounded-xl"
        >
          <Image
            src="/images/send.png"
            alt="send"
            width={50}
            height={50}
            className="w-4 md:w-6 invert"
          />
        </button>
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
