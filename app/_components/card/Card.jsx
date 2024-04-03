import React from "react";
import Button from "../button/Button";
import axios from "@/app/config/Axios";
import Modal from "../modal/Modal";
const Card = ({ data, setTask }) => {
  const delteTask = (id) => {
    axios
      .delete(`/home?id=${id}`)
      .then((res) => {
        setTask(res.data.updatedTask);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div key={data._id} className="bg-base-200 text-black rounded-lg p-5">
        <div className="my-6">
          <h3 className="text-xl font-medium">{data.title}</h3>
          <p className="text-gray-500 text-sm">{data.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div onClick={() => delteTask(data._id)}>
            <Button value={"Delete"} />
          </div>
          <div
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <Button value={"Edit"} />
          </div>
        </div>
      </div>
      <Modal currentData={data} setTask={setTask} />
    </>
  );
};

export default Card;
