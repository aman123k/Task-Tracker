import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GlobalContext } from "../context/globalContext";

function TaskContainer({ Header }) {
  const {
    setEdit,
    openEdit,
    setOpenEdit,
    setDelete,
    filterAssignee,
    filterDate,
    filterPriority,
  } = useContext(GlobalContext);

  const [containerText, setContainerText] = useState([]);

  useEffect(() => {
    const storeTask = JSON.parse(localStorage.getItem("storeTask"));
    const newTaskFilteredByStatus = storeTask?.filter((task) => {
      return task.status === Header;
    });

    let filteredTasks = newTaskFilteredByStatus;

    if (filterAssignee || filterDate || filterPriority) {
      filteredTasks = newTaskFilteredByStatus?.filter((task) => {
        const taskDate = new Date(task.date);
        const filterDateObj = new Date(filterDate);

        const isSameDate =
          taskDate.getFullYear() === filterDateObj.getFullYear() &&
          taskDate.getMonth() === filterDateObj.getMonth() &&
          taskDate.getDate() === filterDateObj.getDate();
        return (
          task.assignee === filterAssignee ||
          isSameDate ||
          task.priority === filterPriority
        );
      });
    }

    setContainerText(filteredTasks);
  }, [Header, filterAssignee, filterDate, filterPriority]);

  return (
    <>
      {containerText?.map((task, index) => {
        return (
          <section
            key={index}
            className=" bg-[#F3F1F2] p-3 flex flex-col my-2 gap-3 rounded-lg font-sans "
          >
            <header className=" flex justify-between items-center border-b border-[#C5C3C4] p-2">
              <h1 className=" font-semibold tracking-wide">{task?.title}</h1>
              <span className=" text-sm bg-[#23699A] rounded-sm text-white p-1">
                {task?.priority}
              </span>
            </header>
            <p className=" text-sm tracking-wide text-[#9A9999]">
              {task?.description}
            </p>
            <footer className=" flex flex-col gap-3 relative">
              <div className=" flex items-center justify-between">
                <h2 className=" font-semibold tracking-wide">
                  {task?.assignee}
                </h2>
                <BsThreeDotsVertical
                  className=" bg-[#23699A] text-2xl p-1 text-white rounded-sm cursor-pointer"
                  onClick={() => setOpenEdit(`${index}${Header}`)}
                />
              </div>
              {openEdit === `${index}${Header}` && (
                <div className=" flex-col flex gap-px capitalize absolute right-[-10px] bg-[#D9D9D9] px-4 text-sm tracking-wide text-[#737373] py-1.5 rounded-lg">
                  <span
                    onClick={() => {
                      setEdit(task);
                      setOpenEdit("");
                    }}
                    className=" border-b border-white pb-1.5 cursor-pointer"
                  >
                    edit
                  </span>
                  <span
                    className="pt-1.5 cursor-pointer"
                    onClick={() => {
                      setDelete(task);
                      setOpenEdit("");
                    }}
                  >
                    delete
                  </span>
                </div>
              )}

              <button className="capitalize bg-[#24689C] text-white px-10 py-1.5 mt-4 text-sm tracking-wider rounded-lg">
                {task.status === "pending" ? "Assign" : task.status}
              </button>
            </footer>
          </section>
        );
      })}
    </>
  );
}

export default TaskContainer;
