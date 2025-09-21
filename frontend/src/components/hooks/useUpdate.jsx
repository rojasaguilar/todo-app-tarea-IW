import React from "react";

function useUpdate({ tareaSeleccionada, getTasks }) {
  const editarTarea = async (tarea) => {
    return await fetch(`http://localhost:3030/api/v1/tasks/${tarea._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaSeleccionada),
    });
  };

  const handleUpdate = async (e) => {
    if (e.key === "Enter") {
      const response = await editarTarea(tareaSeleccionada);
      if (response.ok) {
        getTasks();
      }
    }
  };

  return handleUpdate;
}

export default useUpdate;
