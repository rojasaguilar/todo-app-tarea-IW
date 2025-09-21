import React from "react";

function useAdd({ vaciarTarea, getTasks, setAgregado, tarea }) {
  const agregarTarea = async () => {
    return await fetch("http://localhost:3030/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
  };

  const handleAgregar = () => setAgregado(true);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (tarea.titulo.trim() === "") {
        alert("Agrega un título a tu tarea");
        return;
      }
      const data = await agregarTarea();
      if (data.ok) {
        vaciarTarea();
        getTasks();
        setAgregado(false);
      }
    }
  };

  return [handleAgregar, handleKeyDown];
}

export default useAdd;
