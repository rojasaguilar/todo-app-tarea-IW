import { ChevronRight, HomeIcon, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskDetails from "../components/TaskDetails";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [agregando, setAgregado] = useState(false);
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
    fechaLimite: "",
  });

  const handleAgregar = () => setAgregado(true);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && tarea.titulo.trim() !== "") {
      const data = await agregarTarea();
      if (data.ok) {
        alert("Tarea agregada correctamente");
      }
      vaciarTarea();
      getTasks();
      setAgregado(false);
    }
  };

  const agregarTarea = async () => {
    return await fetch("http://localhost:3030/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
  };

  const handleCompleted = async (t) => {
    t = { ...t, completada: true };
    const data = await completarTarea(t);
    if (data.ok) {
      alert("Tarea completada");
    }
    getTasks();
  };

  const completarTarea = async (tarea) => {
    return await fetch(`http://localhost:3030/api/v1/tasks/${tarea._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const vaciarTarea = () => {
    setTarea({
      titulo: "",
      descripcion: "",
      fechaLimite: "",
    });
  };

  const getTasks = async () => {
    const res = await fetch("http://localhost:3030/api/v1/tasks", {
      method: "GET",
    });
    const data = await res.json();
    setTasks(data.data.tasks);
  };
  return (
    <>
      <div id="container" className="p-20 flex flex-col gap-8">
        <div id="topBar" className="flex flex-row gap-4 ">
          <HomeIcon size={30} strokeWidth={2} />
          <h1 className="text-2xl font-semibold bg-amber-100">Tareas</h1>
        </div>
        {/* TAREAS */}
        <div id="uncompleted-tasks" className="flex flex-col gap-2 mt-4">
          {tasks.map((t) =>
            !t.completada ? <TaskCard task={t} key={t._id} handleCompleted={handleCompleted} /> : null
          )}
        </div>

        <div className="completed-tasks flex flex-col ">
          <div className="action-deploy flex flex-row bg-red-100 p-2">
            <ChevronRight />
            <h2>Completadas: </h2>
            <p>
              {tasks.reduce(
                (sum, current) =>
                  current.completada === true ? (sum = sum + 1) : (sum = sum),
                0
              )}
            </p>
          </div>

          {/* COMPLETED TASKS */}
          <div id="completed-tasks" className="flex flex-col gap-2 mt-6">
            {tasks.map((t) =>
              t.completada ? (
                <TaskCard
                  task={t}
                  key={t._id}
                />
              ) : null
            )}
          </div>

          {!agregando ? (
            <button
              onClick={handleAgregar}
              className="flex flex-row gap-2 items-center bg-gray-900 p-3 rounded-lg mt-3 text-white"
            >
              <Plus />
              Agregar una tarea
            </button>
          ) : (
            <input
              autoFocus
              onBlur={() => {
                vaciarTarea();
                setAgregado(false);
              }}
              value={tarea.titulo}
              onChange={(e) => setTarea({ ...tarea, titulo: e.target.value })}
              onKeyDown={handleKeyDown}
              className="flex flex-row gap-2 items-center bg-gray-900 p-3 rounded-lg mt-3 text-white"
            ></input>
          )}
        </div>
      </div>

      <TaskDetails task={{titulo: "buena"}}/>
    </>
  );
}

export default Home;
