"use client";
import { useContext, useState } from "react";
// import { UseFormRegister, useForm } from "react-hook-form";
// import { login } from "../Services";
import AuthContext from "../components/AuthProvider";
const Login = () => {
  let { loginUser } = useContext<any>(AuthContext);

  return (
    <>
      <form onSubmit={loginUser}>
        <section className="h-screen">
          <div className="h-full bg-blue-500">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between p-10">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>

              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <div className="flex flex-row items-center justify-center lg:justify-start text-white mb-2 ">
                  <p className="mb-0 mr-4 text-[24px]">
                    <b>Sign in with</b>
                  </p>
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="username"
                    className="rounded-lg border-[1px] peer block min-h-[auto] w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none text-white placeholder-white"
                    id="exampleFormControlInput2"
                    placeholder="username"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    name="password"
                    className="rounded-lg border-[1px] peer block min-h-[auto] w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none text-white placeholder-white"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                  />
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="border-lg flex items-center mb-4">
                    <input
                      id="remember-me"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ms-2 text-sm font-medium text-white dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
