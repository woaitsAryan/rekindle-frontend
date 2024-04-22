import React, { useState } from "react";
interface ModalData {
  prompt: string;
  outputData: string;
  date: Date;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = (props: ModalData) => {
  return (
    <div className="bg-white fixed w-[75%] top-[50%] translate-y-[-50%] cursor-pointer flex flex-col gap-[.5rem] rounded-[1rem] px-[1.5rem] py-[1.5rem] z-[100000000] justify-around text-primary_text border-[1px] border-[#aeaeae60] font-coperHead">
      <p
        className="w-full text-right px-[2rem] font-bold"
        onClick={() => {
          props.showModal(false);
        }}
      >
        Close
      </p>
      <h1 className="text-xl font-bold bg-gradient-to-r text-btn">
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
