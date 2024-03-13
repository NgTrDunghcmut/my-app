"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthProvider";
const Header = () => {
  let { user, logoutUser } = useContext<any>(AuthContext);
  return (
    <div className="flex justify-between p-2  shadow-lg shadow-blue-500/50 items-center">
      <div>
        <Link to="/">
          <Image
            width={60}
            height={60}
            className="h-auto"
            src="/images/logoBK.png"
            alt="logo"
          />
        </Link>
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
        {user ? (
          <p onClick={logoutUser}>Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {user && <p>Hello {user.username}!</p>}
      </div>
    </div>
  );
};

export default Header;
