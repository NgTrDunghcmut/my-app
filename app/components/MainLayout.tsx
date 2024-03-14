"use client";
// import Toolbars from "./components/toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect, useContext } from "react";
// import AuthContext from "./test";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // alert("Logged in");
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <div className="flex col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3 pr-16">{children}</div>
      </div>
    </main>
  );
}
