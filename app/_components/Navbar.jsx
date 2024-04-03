import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Navbar = () => {
  const navigate = useRouter();
  const logout = () => {
    Cookies.remove("token");
    navigate.replace("/auth/login");
  };
  return (
    <div className="flex items-center justify-end h-[70px] bg-gray-500 px-[5%]">
      <button
        title="logout"
        onClick={() => logout()}
        className="py-2 px-4 bg-black rounded-lg border"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
