import React from "react";
import TaskContainer from "./TaskContainer";

function Card({ Header }) {
  return (
    <>
      <section className="flex-shrink-0 rounded-lg overflow-hidden w-full bg-white">
        <header
          className={`${
            Header === "pending"
              ? " bg-[#8C8B90]"
              : Header === "in progress"
              ? " bg-[#E69924]"
              : Header === "completed"
              ? "bg-[#45A823]"
              : Header === "deployed"
              ? "bg-[#353976]"
              : "bg-[#F68871]"
          } text-center capitalize font-bold py-3 tracking-wider`}
        >
          <h1 className="text-white">{Header}</h1>
        </header>
        <section className="p-3 overflow-y-scroll">
          <TaskContainer Header={Header} />
        </section>
      </section>
    </>
  );
}

export default Card;
