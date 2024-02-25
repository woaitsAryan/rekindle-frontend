import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="mobile:w-[100%] md:w-[60%] h-16 bg-black border-t-[2px] border-b-[2px] border-[#aeaeae40] md:rounded-full sticky top-4 left-[50%] laptop:translate-x-[-30%]  px-6 flex items-center justify-between z-[1000000]">
      <div className="h-full flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="h-[50%] w-auto brightness-[500%]"
        />
        <div className="text-white font-shadows text-xl laptop:text-2xl font-medium tracking-wide">
          ReKindle
        </div>
      </div>
      <div className="links text-white flex gap-8 font-mona_medium text-sm md:text-base">
        <Link href="/" className="hover:text-pink-200">
          Home
        </Link>
        <Link href="/emotion" className="hover:text-pink-300">
          Emotion Book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
