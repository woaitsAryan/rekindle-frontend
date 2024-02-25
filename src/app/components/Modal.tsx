import React, { useState } from 'react';
interface ModalData{
    prompt:string,
      outputData:string,
      date:Date,
      showModal:React.Dispatch<React.SetStateAction<boolean>>
  }
const Modal = (props:ModalData) => {


    return (
        <div  className='bg-[rgba(5,2,2,1)] sticky w-[75%] top-[50%] translate-y-[-50%] cursor-pointer flex flex-col gap-[.5rem] rounded-[1rem] px-[1.5rem] py-[1.5rem] z-[100000000] justify-around text-white border-[1px] border-[#aeaeae60]'>
            <p className='w-full text-right px-[2rem] font-bold' onClick={()=>{
                props.showModal(false)
            }}>Close</p>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                {props.prompt}
            </h1>
            <p>{props.outputData}</p>
            <p className="w-full text-right font-semibold mt-4">
                {props.date.toDateString()}
            </p>
        </div>
    );
};

export default Modal;