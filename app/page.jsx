"use client";
import { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import Link from "next/link";
import axios from "@/app/config/Axios";
import Card from "./_components/card/Card";
import Modal from "./_components/modal/Modal";
export default function Home() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios
      .get(`/home`)
      .then((res) => {
        setTask(res.data.CurrentUser.task);
        console.log(res.data.CurrentUser.task);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleTask = (id) => {
    axios
      .delete(`/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="bg-white flex flex-col h-screen">
      <Navbar />
      <div className="h-full flex ">
        <div className="flex-initial w-[20%] bg-gray-200 border shadow-2xl flex items-end p-5">
          <Link href={"/addTask"} className="w-full">
            <div className="w-full rounded-lg flex items-center justify-center bg-blue-500 text-white py-3">
              Add Task
            </div>
          </Link>
        </div>
        <div className="flex-1 p-5 ">
          <div className="rounded-lg shadow-md min-h-[70vh] border p-5">
            <div className="grid grid-cols-3  gap-4 ">
              {task?.map((item) => (
                <Card key={item._id} data={item} setTask={setTask} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
