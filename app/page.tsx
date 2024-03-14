"use client";
// import Toolbars from "./components/toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import MainLayout from "./components/MainLayout";
import { ClassNames } from "@emotion/react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import PrivateRoute from "./utils/PrivateRoutes";
// import { AuthProvider } from "./components/test";

export default function Home() {
  return (
    <div className="Web">
      <MainLayout>HOME</MainLayout>
    </div>
  );
}
