import React, { useContext, useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import CreateTask from "./CreateTask";
import Card from "./Card";
import { GlobalContext } from "../context/globalContext";
import EditTask from "./EditTask";
import Default from "./Default";

function MainContainer() {
  const [createTask, setCreateTask] = useState(false);
  const storeTask = JSON.parse(localStorage.getItem("storeTask"));
  const { edit, Delete, setfilterAssignee, setfilterDate, setfilterPriority } =
    useContext(GlobalContext);
  return (
    <>
      <section
        className=" flex flex-col gap-4 border-4 border-[#FFFAFF] rounded-xl drop-shadow-md mx-10 max-[650px]:mx-4 max-[650px]:px-3
       px-8 py-8 max-[650px]:py-5"
      >
        <section className="capitalize flex-col flex gap-4">
          <div className=" flex items-center max-[850px]:items-end select-none justify-between">
            <div
              className=" flex max-[850px]:gap-2 items-center max-[850px]:items-start
            gap-4 max-[850px]:flex-col"
            >
              <span className=" font-semibold font-sans">filter by :</span>
              <div className=" flex  gap-2 ">
                <input
                  type="text"
                  placeholder="Assignee "
                  onChange={(e) => setfilterAssignee(e.currentTarget.value)}
                  className="max-[650px]:w-[90px] max-[650px]:text-sm px-3 py-1.5 rounded-lg"
                />
                <div className="relative">
                  <select
                    onChange={(e) => setfilterPriority(e.currentTarget.value)}
                    className=" appearance-none  bg-white  px-2.5 text-sm py-2.5 max-[650px]:pr-2.5 pr-8 rounded-lg outline-none"
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
                <input
                  type="date"
                  onChange={(e) => setfilterDate(e.currentTarget.value)}
                  className="outline-none max-[650px]:w-[120px] py-1.5 px-1.5 rounded-lg"
                />
              </div>
            </div>
            <button
              className=" bg-[#23699a] text-white px-10 text-sm py-2.5 rounded-lg 
            max-[650px]:hidden font-semibold capitalize tracking-wider"
              onClick={() => setCreateTask(true)}
            >
              Add new task
            </button>
          </div>
          <div className=" flex items-center gap-5 max-[650px]:hidden">
            <span className=" font-semibold font-sans">Sort by : </span>
            <div className="relative">
              <select
                onChange={(e) => setfilterPriority(e.currentTarget.value)}
                className=" appearance-none  bg-white  px-2.5 text-sm py-2.5 max-[650px]:pr-4 pr-8 rounded-lg outline-none"
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
        </section>
        {/* check if there is task then map it */}
        {storeTask && storeTask.length !== 0 ? (
          <section className=" grid grid-cols-5 max-[1050px]:grid-cols-3 gap-4 max-[850px]:flex overflow-x-scroll w-full">
            <Card Header="pending" />
            <Card Header="in progress" />
            <Card Header="completed" />
            <Card Header="deployed" />
            <Card Header="deffered" />
          </section>
        ) : (
          <Default />
        )}

        <button
          className=" bg-[#23699a] text-white px-10 text-sm py-2 rounded-lg 
            max-[650px]:block hidden w-full font-semibold capitalize tracking-wider"
          onClick={() => setCreateTask(true)}
        >
          Add new task
        </button>
      </section>
      {createTask && <CreateTask setCreateTask={setCreateTask} />}
      {(edit || Delete) && <EditTask />}
    </>
  );
}

export default MainContainer;
