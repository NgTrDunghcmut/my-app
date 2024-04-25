import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Login from "./login/page";
import MainLayout from "./components/MainLayout";
import { ClassNames } from "@emotion/react";

export default function Home() {
  return (
    <div
      style={{
        background:
          "url(http://m.gettywallpapers.com/wp-content/uploads/2023/04/Batman-Logo-Wallpaper.jpg) 100% /auto",
      }}
    >
      <MainLayout>Homepage</MainLayout>
    </div>
  );
}
