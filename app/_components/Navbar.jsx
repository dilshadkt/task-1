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
