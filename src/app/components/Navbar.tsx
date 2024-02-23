import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="p-4 h-[100%] fixed top-0 right-0 bg-primary_text flex flex-col justify-around">
      <div className="flex flex-col items-center text-xs text-white gap-1">
        <Image
          src="/images/user.png"
          width={50}
          height={50}
          alt="profile"
          className="w-6"
        />
        <div className="label">Profile</div>
      </div>
      <div className="flex flex-col items-center text-xs text-white gap-1">
        <Image
          src="/images/home.png"
          width={50}
          height={50}
          alt="profile"
          className="w-6"
        />
        <div className="label">Home</div>
      </div>
      <div className="flex flex-col items-center text-xs text-white gap-1">
        <Image
          src="/images/open-book.png"
          width={50}
          height={50}
          alt="profile"
          className="w-6"
        />
        <div className="label">Journal</div>
      </div>
      <div className="flex flex-col items-center text-xs text-white gap-1">
        <Image
          src="/images/bipolar.png"
          width={50}
          height={50}
          alt="profile"
          className="w-6"
        />
        <div className="label">Profile</div>
      </div>
      <div className="flex flex-col items-center text-xs text-white gap-1">
        <Image
          src="/images/search.png"
          width={50}
          height={50}
          alt="profile"
          className="w-6"
        />
        <div className="label">Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
