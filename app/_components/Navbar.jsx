import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navigate = useRouter();
  const logout = () => {
    localStorage.clear();
    navigate.replace("/auth/login");
  };
  return (
    <div className="flex items-center justify-end h-[70px] bg-base-200 px-[5%]">
      <div
        onClick={() => logout()}
        className="w-10 h-10 rounded-full bg-black"
      ></div>
    </div>
  );
};

export default Navbar;
