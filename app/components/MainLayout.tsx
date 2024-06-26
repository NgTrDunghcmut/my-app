"use client";
// import Toolbars from "./components/toolbar";

import * as React from "react";
import Header from "./Header";
import Sidebar2 from "./Sidebar2";
// import Sidebar from "./Sidebar";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const routes = useRo utes([{ path: "/devices/:id", element: <MainView /> }]);
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <div className="flex col-span-1">
          <Sidebar2 />
        </div>
        <div className="col-span-3 pr-16">{children}</div>
      </div>
      <Header />
    </main>
  );
}
