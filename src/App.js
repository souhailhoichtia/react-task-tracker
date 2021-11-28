import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctors appointent",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "meeting at school",
      day: "Feb 5th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  // delete task
  const deleteTask = (id) => {
    //console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
}

export default App;
