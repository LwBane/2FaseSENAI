import React from "react";
import Navbar from "../components/Navbar";
import Titulo from "../components/Titulo";

function Home() {
  return (
    <div>
      <Navbar />
      <Titulo texto={"Home"}/>
    </div>
  );
}

export default Home;
