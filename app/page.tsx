import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Login from "./login/page";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <div
      style={{
        background: `url("/images/Batman-Logo-Wallpaper.jpg")`,
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <MainLayout>Homepage</MainLayout>
    </div>
  );
}
