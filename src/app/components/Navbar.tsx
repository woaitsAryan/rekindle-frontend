import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="mobile:w-full md:w-[80%] lg:w-[60%] h-24 md:h-16 bg-white border-[2px] border-outline rounded-md md:rounded-xl sticky top-4 mx-auto  px-6 flex items-center flex-col md:flex-row md:justify-between z-[1000000] text-primary_text">
      <div className="h-16 md:h-full flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="h-[50%] w-auto invert"
        />
        <div className="text-primary_text font-shadows text-xl laptop:text-2xl font-medium tracking-wide">
          ReKindle
        </div>
      </div>
      <div className="links text-primary_text font-coperHead flex gap-8  text-sm md:text-base">
        <Link href="/" className="hover:text-btn">
          Home
        </Link>
        <Link href="/emotion" className="hover:text-btn">
          Emotion Book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
