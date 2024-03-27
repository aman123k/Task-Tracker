import React, { useContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCaretDownOutline } from "react-icons/io5";
import { GlobalContext } from "../context/globalContext";

function EditTask() {
  const { edit, setEdit, Delete, setDelete } = useContext(GlobalContext);
  const [priority, setPriority] = useState(edit.priority);
  const [status, setStatus] = useState(edit.status);
  const storeTask = JSON.parse(localStorage.getItem("storeTask"));

  // Delete Task Function
  const deleteTask = (title) => {
    const newTask = storeTask?.filter((task) => {
      return task.title !== title?.title || task.status !== title?.status;
    });
    console.log(newTask);
    localStorage.setItem("storeTask", JSON.stringify(newTask));
    setDelete("");
  };

  // Edit Task Funtion
  const editTask = (Task) => {
    console.log(Task);
    const newTask = storeTask?.filter((task) => {
      return task.title === Task?.title;
    })[0];
    if (newTask) {
      newTask.priority = priority;
      newTask.status = status;
    }
    localStorage.setItem("storeTask", JSON.stringify(storeTask));
    setEdit("");
  };

  return (
    <>
      <section className=" flex items-center justify-center absolute top-0 left-0 z-50 h-screen w-full">
        {edit ? (
          <section className=" w-[450px] font-sans clear-start max-[650px]:w-[90%]">
            <header className=" flex  items-center justify-between bg-white px-7 max-[650px]:py-3 py-4 ">
              <h1 className=" font-bold uppercase text-lg font-sans">
                Edit Task
              </h1>
              <RxCrossCircled
                className=" cursor-pointer font-semibold text-xl"
                onClick={() => setEdit("")}
              />
            </header>
            <section className=" bg-gradient-to-br from-[#F2DBF8] to-[#E6DBFD]  ">
              <form
                action="#"
                className=" flex flex-col gap-2 px-7 py-6 select-none max-[650px]:gap-1.5 "
              >
                <label htmlFor="title" className="max-[650px]:mt-0">
                  Title :
                </label>
                <span className=" bg-[#DADADA] px-3.5 py-2.5 text-sm rounded-lg text-[#9c9ba0] border border-[#9c9ba0]">
                  {edit?.title}
                </span>
                <label htmlFor="title" className=" mt-2">
                  Description
                </label>
                <span className=" bg-[#DADADA] px-3.5 py-2.5 text-sm rounded-lg text-[#9c9ba0] border border-[#9c9ba0]">
                  {edit?.description}
                </span>
                <label htmlFor="title" className=" mt-2">
                  Team :
                </label>
                <span className=" bg-[#DADADA] px-3.5 py-2.5 text-sm rounded-lg text-[#9c9ba0] border border-[#9c9ba0]">
                  {edit?.team}
                </span>
                <label htmlFor="title" className=" mt-2">
                  Assignee :
                </label>
                <span className=" bg-[#DADADA] px-3.5 py-2.5 text-sm rounded-lg text-[#9c9ba0] border border-[#9c9ba0]">
                  {edit?.assignee}
                </span>
                <div className=" flex justify-between items-center max-[650px]:mt-0 mt-2 max-[650px]:items-start">
                  <div className=" flex items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                    <label htmlFor="select_and_option">Priority : </label>
                    <div className="relative">
                      <select
                        onChange={(e) => setPriority(e.currentTarget.value)}
                        className=" appearance-none  bg-white border border-[#9c9ba0] px-2.5 text-sm py-1 pr-8 rounded-lg outline-none"
                      >
                        {["P0", "P1", "P2"].map((value, index) => {
                          if (edit.priority === value) {
                            return (
                              <option
                                key={indexedDB}
                                selected
                                value={edit.priority}
                              >
                                {edit.priority}
                              </option>
                            );
                          } else {
                            return (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            );
                          }
                        })}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <IoCaretDownOutline />
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                    <label htmlFor="select_and_option">Status : </label>
                    <div className="relative">
                      <select
                        onChange={(e) => setStatus(e.currentTarget.value)}
                        className=" appearance-none capitalize bg-white border border-[#9c9ba0] px-2.5 text-sm py-1 pr-8 rounded-lg outline-none"
                      >
                        {[
                          "pending",
                          "in progress",
                          "completed",
                          "deployed",
                          "deffered",
                        ].map((value, index) => {
                          if (edit.status === value) {
                            return (
                              <option
                                key={indexedDB}
                                selected
                                value={edit.status}
                              >
                                {edit.status}
                              </option>
                            );
                          } else {
                            return (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            );
                          }
                        })}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <IoCaretDownOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
            <footer className=" flex items-center bg-white px-7 py-4 gap-4 max-[650px]:py-3 justify-end">
              <button
                onClick={() => editTask(edit)}
                className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm"
              >
                submit
              </button>
              <button className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm">
                Reset
              </button>
            </footer>
          </section>
        ) : Delete ? (
          <section className=" w-[450px] font-sans clear-start max-[650px]:w-[90%]">
            <header className=" flex  items-center justify-between bg-white px-7 max-[650px]:py-3 py-4 ">
              <h1 className=" font-bold uppercase text-lg font-sans">
                Delete Task
              </h1>
              <RxCrossCircled
                className=" cursor-pointer font-semibold text-xl"
                onClick={() => setDelete("")}
              />
            </header>
            <section className=" bg-gradient-to-br from-[#F2DBF8] to-[#E6DBFD] px-7 py-5">
              <h2 className=" capitalize my-4">do you wish to delete task </h2>
              <div className="flex justify-between  ">
                <span className=" font-semibold">Task 1</span>
                <div className=" flex items-center gap-4">
                  <button
                    onClick={() => deleteTask(Delete)}
                    className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm"
                  >
                    Yes
                  </button>
                  <button
                    className=" bg-[#24689c] text-white capitalize py-1 px-3.5 rounded-lg text-sm"
                    onClick={() => setDelete("")}
                  >
                    No
                  </button>
                </div>
              </div>
            </section>
          </section>
        ) : (
          ""
        )}

        <div className=" w-full h-screen bg-[#5a5865] opacity-30 absolute top-0 left-0 -z-10"></div>
      </section>
    </>
  );
}

export default EditTask;
