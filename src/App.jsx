import { useState } from "react";
import Header from "./components/Header"
import Create from "./components/Create"
import Show from "../src/components/Show"
function App() {
  const [tasks, settasks] = useState([]);
  
  return (
    <>
      {/* Header */}
      <Header tasks={tasks} />
      {/* Header */}

      {/* CreateTasks */}
      <Create tasks={tasks} settasks={settasks} />
      {/* CreateTasks */}

      {/* CreateTasks */}
      <Show tasks={tasks} settasks={settasks} />
      {/* CreateTasks */}
    </>
  );
}

export default App;
