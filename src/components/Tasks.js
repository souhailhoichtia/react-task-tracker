const tasks = [
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
];
function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
