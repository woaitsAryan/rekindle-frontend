import React from "react";
import Link from "next/link";
import Image from "next/image";
const EmotionCard = ({ username }: { username?: string }) => {
  return (
    <div className="w-[30%] p-4 flex flex-col">
      <div className="header flex justify-between items-center">
        <div className="w-16 h-16 bg-primary_text rounded-xl"></div>
        <div className="text">
          <div className="name text-xl text-primary_text">Cassandra Levi</div>
          <div className="text-sm text-primary_text font-mona_regular">
            Nov 25, 2020 - 9:45am
          </div>
        </div>
      </div>
      <div className="content text-sm font-mona_regular mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quo
        laborum dolore quis vero sequi doloremque quibusdam explicabo
        consequatur, fuga et, recusandae quia iste. Laborum suscipit earum ea
        labor...
        <Link href="/" className="text-primary_text">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default EmotionCard;
