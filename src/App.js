import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  //App component that could be a class
  //only can return one parent element
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Delete task
  const deleteTask = async (id) => {
    //delete from the data in the server
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, remider: !taskToToggle.remider };
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  //adding a task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]); //adding the newTask
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/*teranry operator if addtask is true the add task form shows if not don;t show the form*/}
      {showAddTask && <AddTask onAdd={addTask} />}{" "}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
