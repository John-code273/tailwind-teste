import { useState } from "react";
import "./index.css";
import Herader from "./componentes/herader/Herader";
import SideBar from "./componentes/SideBar";
import EmailList from "./componentes/EmailList";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Herader className="w-full h-12" />
      <div
        className="
      flex text-left text-2xl
      pt-5 h-[calc(100vh_-_4rem)] bg-slate-600
    dark:bg-slate-900 "
      >
        <SideBar />
        <EmailList className="justify-center" />
      </div>
    </>
  );
}

export default App;
