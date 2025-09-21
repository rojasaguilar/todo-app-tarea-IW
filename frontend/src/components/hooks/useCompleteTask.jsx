import React from "react";

function useCompleteTask({ tarea, getTasks }) {
  const completarTarea = async (tarea) => {
    return await fetch(`http://localhost:3030/api/v1/tasks/${tarea._id}`, {
      method: "PUT",
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

  return handleCompleted
}

export default useCompleteTask;
