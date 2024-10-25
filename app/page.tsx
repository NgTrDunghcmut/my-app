import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Login from "./login/page";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <div
      style={{
        background: `url("/images/background.png")`,
        backgroundSize: "86%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <MainLayout> </MainLayout>
    </div>
  );
}
