import React from "react";
import { useForm } from "react-hook-form";
import axios from "@/app/config/Axios";
import { useRouter } from "next/navigation";
const Modal = ({ currentData, setTask }) => {
  const navigator = useRouter();
  const { register, watch } = useForm();
  const EditTask = (e) => {
    e.preventDefault();
    axios
      .patch(`/home/edit?taskId=${currentData._id}`, watch())
      .then((res) => {
        navigator.replace("/");
        document.getElementById("my_modal_2").close();
        setTask(res.data.CurrentUser.task);
        console.log(res.data.CurrentUser.task);
      })
      .catch((err) => console.log(err));
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box p-5 border text-black flex justify-center">
        {" "}
        <div className="bg-base-200 shadow-2xl p-6 rounded-lg w-[400px]">
          <h4 className="text-center my-4">Edit Task</h4>
          <form onSubmit={EditTask}>
            <input
              type="text"
              {...register("title")}
              placeholder={currentData?.title}
              className="border p-3 w-full rounded-lg my-2"
              required
            />
            <input
              type="text"
              {...register("description")}
              placeholder={currentData?.description}
              className="border p-3 w-full rounded-lg my-2"
              required
            />
            <button className="py-2 bg-blue-500 text-white w-full my-2 rounded-lg">
              ADD
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
