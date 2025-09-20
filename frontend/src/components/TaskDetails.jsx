import { AlarmClock, Trash } from "lucide-react";
import { useState } from "react";

function TaskDetails({ task, handleDelete, handleUpdate, setTask }) {
  if (task) {
    return (
      <>
        <div
          id="window"
          className="flex flex-col gap-3 px-3 py-8 bg-gray-900 h-full"
        >
          <div
            id="titulo-tarea"
            className="text-white p-3 rounded-lg bg-gray-600 flex flex-row items-center gap-4 "
          >
            <div className="rounded-full h-6 w-6 border"></div>
            <input
              onChange={(e) => {
                setTask({ ...task, titulo: e.target.value });
              }}
              onKeyDown={(e) => handleUpdate(e)}
              value={task.titulo}
              className="text-xl font-semibold"
            ></input>
          </div>

          <div
            id="descripcion-tarea"
            className="flex flex-row items-center gap-4 "
          >
            <textarea
              onChange={(e) => handleUpdate(e)}
              placeholder="Descripción"
              className="text-white text-[1rem] p-3 rounded-lg bg-gray-600 w-full resize-none text-lg font-semibold"
              value={task.descripcion}
            ></textarea>
          </div>

          <div className="text-white p-3 rounded-lg bg-gray-600 flex flex-row items-center gap-4">
            <input
              value={
                task.fechaLimite
                  ? new Date(task.fechaLimite).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) => {
                setTask({ ...task, fechaLimite: e.target.value });
              }}
              onKeyDown={(e) => handleUpdate(e)}
              type="date"
              name=""
              id=""
            />
          </div>

          <div className="grid grid-cols-6">
            <div className="col-span-5 items-center justify-center flex flex-row gap-3 text-white bg-gray-600 p-3">
              <AlarmClock />
              <p>Creada: {task.fechaCreada || "ayer"}</p>
            </div>
            <div
              onClick={() => handleDelete(task._id)}
              className=" items-center justify-center flex flex-row gap-3 text-white bg-red-600 p-3 "
            >
              <Trash />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TaskDetails;
