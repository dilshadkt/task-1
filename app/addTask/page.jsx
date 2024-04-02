"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "@/app/config/Axios";
import { useRouter } from "next/navigation";
const AddTasks = () => {
  const { register, watch } = useForm();
  const navigator = useRouter();
  const CreateTask = (e) => {
    e.preventDefault();
    axios
      .post("/home/add", watch())
      .then((res) => {
        navigator.replace("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white text-black">
      <div className="bg-base-200 shadow-2xl p-6 rounded-lg w-[400px]">
        <h4 className="text-center my-4">Create new Task</h4>
        <form onSubmit={CreateTask}>
          <input
            type="text"
            {...register("title")}
            placeholder="title"
            className="border p-3 w-full rounded-lg my-2"
            required
          />
          <input
            type="text"
            {...register("description")}
            placeholder="description"
            className="border p-3 w-full rounded-lg my-2"
            required
          />
          <button className="py-2 bg-blue-500 text-white w-full my-2 rounded-lg">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
