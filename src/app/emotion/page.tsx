import EmotionCard from "../components/EmotionCard";
import Navbar from "../components/Navbar";
export default function Emotion() {
  return (
    <div className="w-full h-screen bg-bg_primary rounded-2xl p-8">
      <Navbar />
      <div className="heading font-mona_bold text-4xl text-primary_text">
        Supernatural Community
        <div className="content w-full h-full flex gap-4 flex-wrap">
          <EmotionCard />
          <EmotionCard />
          <EmotionCard />
          <EmotionCard />
        </div>
      </div>
    </div>
  );
}
