import React from "react";
const EmotionCard = () => {
  return (
   <div className="bg-gray-400 flex flex-col gap-[.5rem] rounded-[1rem] px-[1rem] py-[0.5rem] w-[30%] z-[1000]">
    <h1 className="text-xl font-bold">User prompt: Lorem ipsum dolor sit amet ...  </h1>
    <p>Models reply :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque molestias. Aliquam ad minima cum est. Et qui dicta accusantium.........</p>
    <p className="w-full text-right font-semibold">27th November,2024</p>
   </div>
  );
};

export default EmotionCard;
