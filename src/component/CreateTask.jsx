import React, { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";

function CreateTask({ setCreateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");

  // Create task funtion and also check the filed is not empty
  const createAnTask = () => {
    if (!title && !description) {
      return toast.error("Enter Title and Description");
    } else if (!priority && !team) {
      return toast.error("Enter priority and Team");
    } else if (!assignee) {
      return toast.error("Enter Assignee Person");
    } else {
      const storeTask = JSON.parse(localStorage.getItem("storeTask"));
      if (!storeTask) {
        localStorage.setItem(
          "storeTask",
          JSON.stringify([
            {
              title,
              description,
              priority,
              team,
              assignee,
              status: "pending",
              date: new Date(),
            },
          ])
        );
      } else {
        storeTask.push({
          title,
          description,
          priority,
          team,
          assignee,
          status: "pending",
          date: new Date(),
        });
        localStorage.setItem("storeTask", JSON.stringify(storeTask));
      }
      setTeam("");
      setTitle("");
      setAssignee("");
      setDescription("");
      setPriority("");
      setCreateTask(false);
    }
  };
  // Reset Task
  const resetTask = () => {
    setTeam("");
    setTitle("");
    setAssignee("");
    setDescription("");
    setPriority("");
    toast.success("Contant Reset Successfully");
  };
  return (
    <>
      <section className=" flex items-center justify-center absolute top-0 left-0 z-50 h-screen w-full">
        <section className=" w-[450px] font-sans clear-start max-[650px]:w-[90%]">
          <header className=" flex  items-center justify-between bg-white px-7 max-[650px]:py-3 py-4 ">
            <h1 className=" font-bold uppercase text-lg font-sans">
              Create a Task
            </h1>
            <RxCrossCircled
              className=" cursor-pointer font-semibold text-xl"
              onClick={() => setCreateTask(false)}
            />
          </header>
          <section className=" bg-gradient-to-br from-[#F2DBF8] to-[#E6DBFD]  ">
            <form
              action="#"
              className=" flex flex-col gap-4 px-7 py-6 select-none max-[650px]:gap-1.5 "
            >
              <div className=" flex gap-6 max-[650px]:flex-col max-[650px]:gap-2 justify-between ">
                <label
                  htmlFor="title"
                  className="max-[650px]:mt-0  w-[100px] flex-shrink-0"
                >
                  Title :
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  className="w-full bg-[#DADADA] px-3 py-1.5 text-sm rounded-lg outline-none text-black border border-[#9c9ba0]"
                />
              </div>
              <div className=" flex gap-6 max-[650px]:flex-col max-[650px]:gap-2 justify-between ">
                <label
                  htmlFor="Description"
                  className="max-[650px]:mt-0  w-[100px] flex-shrink-0"
                >
                  Description :
                </label>
                <textarea
                  name="Description"
                  id="Description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  className="w-full bg-[#DADADA] px-3 py-1.5
                text-sm rounded-lg outline-none text-black border
                border-[#9c9ba0]"
                ></textarea>
              </div>
              <div className=" flex max-[650px]:flex-col gap-6 max-[650px]:gap-2 justify-between ">
                <label htmlFor="team" className="w-[100px] flex-shrink-0 mt-2">
                  Team :
                </label>
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.currentTarget.value)}
                  className="w-full bg-[#DADADA] px-3.5 py-1.5 outline-none text-sm rounded-lg text-black border border-[#9c9ba0]"
                />
              </div>
              <div className=" flex max-[650px]:flex-col gap-6 max-[650px]:gap-2 justify-between ">
                <label
                  htmlFor="Assignee"
                  className=" w-[100px] flex-shrink-0  mt-2"
                >
                  Assignee :
                </label>
                <input
                  type="text"
                  id="Assignee"
                  value={assignee}
                  onChange={(e) => setAssignee(e.currentTarget.value)}
                  className="w-full bg-[#DADADA] px-3.5 py-1.5 outline-none text-sm rounded-lg text-black border border-[#9c9ba0]"
                />
              </div>
              <div className=" flex items-center gap-6 max-[650px]:flex-col max-[650px]:items-start">
                <label
                  htmlFor="select_and_option"
                  className=" flex-shrink-0 w-[100px]"
                >
                  Priority :
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => setPriority(e.currentTarget.value)}
                    className=" appearance-none  bg-[#DADADA] border border-[#9c9ba0] px-2.5 text-sm py-1 pr-8 rounded-lg outline-none"
                  >
                    <option value="select" disabled selected>
                      --select--
                    </option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <IoCaretDownOutline />
                  </div>
                </div>
              </div>
            </form>
          </section>
          <footer className=" flex items-center bg-white px-7 py-4 gap-4 max-[650px]:py-3 justify-end">
            <button
              onClick={createAnTask}
              className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm"
            >
              Create a Task
            </button>
            <button
              onClick={resetTask}
              className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm"
            >
              Reset
            </button>
          </footer>
        </section>
      </section>
      <div className=" w-full h-screen bg-[#5a5865] opacity-30 absolute top-0 left-0 "></div>
      <Toaster />
    </>
  );
}

export default CreateTask;
