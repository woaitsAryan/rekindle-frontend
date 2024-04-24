import React from "react";
import { getDayOfMonth, getMonth, getYear } from "@/helpers/datesHelper";
interface ModalData {
  prompt: string;
  outputData: string;
  date: Date;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface EmotionCardProps {
  response: string;
  text: string;
  date: string;
  setSelectedModalData: React.Dispatch<React.SetStateAction<ModalData>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmotionCard = (props: EmotionCardProps) => {
  return (
    <div
      className="bg-white cursor-pointer flex flex-col gap-[.5rem] rounded-xl px-[1.5rem] py-[1.5rem] w-full z-[1000] justify-around text-white border-[2px] border-outline"
      onClick={() => {
        props.setSelectedModalData({
          prompt: props.text,
          outputData: props.response,
          date: new Date(props.date),
          showModal: props.showModal,
        });
        props.showModal(true);
      }}
    >
      <h1 className="text-xl font-bold font-coperHead text-primary_text">
        {props.text.substring(0, 100)}
      </h1>
      <p className="text-primary_text">{props.response.substring(0,175)}</p>
      <p className="w-full text-right font-semibold mt-4 text-primary_text">
        {getDayOfMonth(props.date)} {getMonth(props.date)} {getYear(props.date)}
      </p>
    </div>
  );
};

export default EmotionCard;
