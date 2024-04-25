"use client";

import Image from "next/image";
import Siderbar2 from "./Sidebar2";
import { Link } from "react-router-dom";
import LogoWithLink from "./Homewithlogo";

const Header = () => {
  return (
    <div
      className="flex justify-between p-2  shadow-lg shadow-blue-500/50 items-center"
      style={{ backgroundColor: "white" }}
    >
      <div>
        <LogoWithLink />
      </div>
      <div className="flex gap-2 items-center">
        <div className="rounded-full overflow-hidden w-[60px] h-[60px] border-gray-300 border-[1px] flex items-center justify-center">
          <Image
            width={60}
            height={60}
            className="h-auto"
            src="/images/logoBK.png"
            alt="logo"
          />
        </div>
        {/* <Siderbar2 /> */}
        <h3 style={{ fontFamily: "Tech", fontSize: "25px" }}>Tri Dung</h3>
      </div>
    </div>
  );
};

export default Header;
