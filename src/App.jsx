// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Aside from "./components/aside";
import Main from "./components/main";

function App() {
  // console.log(data);
  return (
    <div className="lg:flex gap-10 container mx-auto py-20">
      <Main />
      <Aside />
    </div>
  );
}

export default App;
