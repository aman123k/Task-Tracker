import React from "react";
import Header from "../component/Header";
import MainContainer from "../component/MainContainer";

function Home() {
  return (
    <section className=" bg-gradient-to-br from-[#F2DBF8] to-[#E6DBFD] overflow-scroll  h-screen">
      <Header />
      <MainContainer />
    </section>
  );
}

export default Home;
