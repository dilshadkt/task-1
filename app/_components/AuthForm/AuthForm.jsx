"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "@/app/config/Axios";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
const AuthForm = () => {
  const { register, watch } = useForm();
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const params = pathname.split("/")[pathname.split("/").length - 1];
  const router = useRouter();

  const Auth = (e) => {
    setError(null);
    e.preventDefault();
    axios
      .post(`/auth/${params}`, watch())
      .then((res) => {
        if (params === "login") {
          router.replace("/");
          Cookies.set("token", res.data.token);
        } else {
          router.push("/auth/login");
        }
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className="bg-base-200 p-5 rounded-lg text-black w-[400px]">
      <h3 className="text-center font-bold  text-xl my-5">
        {params === "login" ? "LOGIN" : "SIGN"}
      </h3>
      <form onSubmit={Auth}>
        <input
          type="email"
          {...register("username")}
          placeholder="username"
          className="w-full p-3 rounded-lg my-2"
          required
        />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
          className="w-full p-3 rounded-lg my-2"
          required
        />
        {params === "login" && (
          <Link href={"/auth/signin"}>
            <p className="my-2 text-sm">create an account ?</p>
          </Link>
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}

        <button className="p-3 my-2 bg-blue-500 text-white w-full rounded-lg">
          {params === "login" ? "Login" : "Signin"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
