import React, { useEffect, useState, useMemo } from "react";
import { ITask } from "./types/types";
import TaskList from "./components/TaskList/TaskList";
import MyMenu from "./components/MyMenu/MyMenu";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

  function filterTasks(tasks: ITask[], filter: string) {
    return tasks.filter((task) => {
      if (filter === "active") {
        return !task.completed;
      } else if (filter === "completed") {
        return task.completed;
      } else {
        return true;
      }
    });
  }

  async function fetchTasks() {
    try {
      const response = await axios.get<ITask[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(response.data);
    } catch (e) {
      alert(e);
    }
  }

  function handleDelete(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleComplete(task: ITask) {
    const updTask = tasks.map((t) =>
      task.id === t.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updTask);
  }

  function handleAdd(newTask: ITask) {
    setTasks([...tasks, newTask]);
  }

  function handleSort(sort: string) {
    setSelectedSort(sort);
    if (sort === "title") {
      setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])));
    } else {
      setTasks([...tasks].sort((a, b) => (a.completed > b.completed ? 1 : -1)));
    }
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <MyMenu
          handleAdd={handleAdd}
          setFilter={setFilter}
          handleSort={handleSort}
          sortValue={selectedSort}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По имени" },
            { value: "completed", name: "По статусу" },
          ]}
        ></MyMenu>
      </div>
      <div>
        <TaskList
          tasks={visibleTasks}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        ></TaskList>
      </div>
    </div>
  );
}

export default App;
