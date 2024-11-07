import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

function App() {
  const [taskList, setTaskList] = useState([]);
  
  useEffect (() => {
    let array = localStorage.getItem("taskList");

    if (array) {
      setTaskList(JSON.parse(array))
    }
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">03 - Task Tracker</h1>
      <p className="text-xl pl-6">Hello</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add a new task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-300">
          To Do:
        </h2>
        {taskList.map((task, i) => (
          <ToDo
            key={i}
            task={task}
            index={i}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
