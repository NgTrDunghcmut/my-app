"use client";
// import Toolbars from "./components/toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Login from "./login/page";
import MainLayout from "./components/MainLayout";
import { ClassNames } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoutes";
import { AuthProvider } from "./components/AuthProvider";

export default function Home() {
  const isAuthenticated = true;
  return (
    <div className="Web">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <MainLayout>Homepage</MainLayout>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
