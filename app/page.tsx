import Toolbars from "./components/toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <Header />
      <div>
        <div className="flex">
          <Sidebar />
        </div>
      </div>
      {/* <div><Toolbars /></div> */}
    </main>
  );
}
