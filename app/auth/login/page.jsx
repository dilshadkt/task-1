import AuthForm from "@/app/_components/AuthForm/AuthForm";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center bg-white justify-center">
      <AuthForm params={"login"} />
    </div>
  );
};

export default page;
