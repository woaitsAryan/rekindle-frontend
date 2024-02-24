import React from "react";
import { getDayOfMonth, getMonth, getYear } from "@/helpers/datesHelper";
interface EmotionCardProps {
  response: string;
  text: string;
  date: string;
}

const EmotionCard = (props: EmotionCardProps) => {
  return (
    <div className="bg-[rgba(255,250,250,0.1)] flex flex-col gap-[.5rem] rounded-[1rem] px-[1.5rem] py-[1.5rem] w-full z-[1000] justify-around text-white border-[1px] border-[#aeaeae60]">
      <h1 className="text-xl font-bold bg-gradient-to-r from-pink-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
        {props.text.substring(0, 100)}
      </h1>
      <p>{props.response.substring(0, 175)}</p>
      <p className="w-full text-right font-semibold mt-4">
        {getDayOfMonth(props.date)} {getMonth(props.date)} {getYear(props.date)}
      </p>
    </div>
  );
};

export default EmotionCard;
