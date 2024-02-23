import Image from "next/image";
import Emotion from "./emotion/page";
export default function Home() {
  return (
    <div className="w-full bg-primary_text p-2">
      <Emotion />
    </div>
  );
}
