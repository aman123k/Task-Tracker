import React, { createContext, useState } from "react";
const GlobalContext = createContext();

function GlobalContextProvider(props) {
  const [edit, setEdit] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [Delete, setDelete] = useState("");
  const [filterAssignee, setfilterAssignee] = useState("");
  const [filterPriority, setfilterPriority] = useState("");
  const [filterDate, setfilterDate] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        edit,
        setEdit,
        filterDate,
        setfilterDate,
        Delete,
        filterAssignee,
        setfilterAssignee,
        setDelete,
        filterPriority,
        setfilterPriority,
        openEdit,
        setOpenEdit,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
