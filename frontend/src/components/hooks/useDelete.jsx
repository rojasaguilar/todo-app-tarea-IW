
function useDelete({ getTasks, setShow, setTareaSeleccionada }) {
    const handleDelete = async (id) => {
    const response = await borrarTarea(id);
    if (response.ok) {
      alert("Tarea borrada exitosamente");
    }
    getTasks();
    setShow(false);
    setTareaSeleccionada({});
  };

  const borrarTarea = async (id) => {
    return await fetch(`http://localhost:3030/api/v1/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return handleDelete;
}

export default useDelete