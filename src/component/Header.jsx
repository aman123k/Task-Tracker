import React from "react";
import { BsPersonFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className=" capitalize flex items-center justify-between max-[650px]:p-4 max-[650px]:mx-0 mx-10 p-6">
        <h1 className=" font-bold text-2xl max-[650px]:text-xl">Task board</h1>
        <span className=" bg-[#FFFFFF] rounded-full p-3">
          <BsPersonFill className=" text-4xl max-[650px]:text-3xl" />
        </span>
      </header>
    </>
  );
}

export default Header;
