import React from "react";
import { getDayOfMonth,getMonth,getYear } from "@/helpers/datesHelper";
interface EmotionCardProps {
  response: string;
  text: string;
  date: string;
}

const EmotionCard = (props: EmotionCardProps) => {
  return (
   <div className="bg-gray-400 flex flex-col gap-[.5rem] rounded-[1rem] px-[1rem] py-[0.5rem] w-full z-[1000] justify-around">
    <h1 className="text-xl font-bold">{props.text.substring(0,100)}</h1>
    <p>{props.response.substring(0,175)}</p>
    <p className="w-full text-right font-semibold">{getDayOfMonth(props.date)} {getMonth(props.date)} {getYear(props.date)}</p>
   </div>
  );
};

export default EmotionCard;
