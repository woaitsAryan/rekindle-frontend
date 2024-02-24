import EmotionCard from "../components/EmotionCard";
export default function Emotion() {
  return (
    <div className="w-full min-h-screen bg-bg_primary flex flex-col justify-center items-center gap-[2rem]  p-8  relative">
      <div className="heading font-mona_bold tab:text-7xl py-2 bg-gradient-to-r from-indigo-700 via-purple-300 to-pink-400 bg-clip-text text-transparent mobile:text-4xl mobile:leading-[3rem] w-full flex justify-center items-center">
        My diary
      </div>
      <input className=" resize-none text-white px-[1rem] py-[0.5rem] bg-[rgba(255,255,255,.1)] rounded-2xl no-scrollbar w-[30%] focus:border-primary_text break-words whitespace-pre-wrap h-auto leading-[1.75rem]" placeholder="Search"/>
      <div className="w-full flex flex-wrap gap-[1rem] justify-center items-start">
        <EmotionCard />
        <EmotionCard /> 
        <EmotionCard />
        <EmotionCard />
        <EmotionCard />
        <EmotionCard /> 
        <EmotionCard />
        <EmotionCard /> <EmotionCard />
        <EmotionCard /> 
        <EmotionCard />
        <EmotionCard />
      </div>
      
    </div>
  );
}
