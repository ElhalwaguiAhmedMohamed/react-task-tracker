import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  //App component that could be a class
  //only can return one parent element

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Calling",
      day: "Feb 5th at 2:30",
      reminder: false,
    },
    {
      id: 2,
      text: "Eating",
      day: "Feb 6th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 1:30",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
