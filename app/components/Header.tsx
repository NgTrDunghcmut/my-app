"use client";

import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between p-2  shadow-lg shadow-blue-500/50 items-center">
      <div>
        <Image
          width={60}
          height={60}
          className="h-auto"
          src="/images/logoBK.png"
          alt="logo"
        />
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

        <h3>Tri Dung</h3>
      </div>
    </div>
  );
};

export default Header;
