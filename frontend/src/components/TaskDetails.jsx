import { AlarmClock, Trash } from "lucide-react";
import React from "react";

function TaskDetails({ task, handleDelete }) {
  return (
    <>
      <div
        id="window"
        className="flex flex-col gap-3 px-2 py-4 bg-gray-900 rounded-md"
      >
        <div
          id="titulo-tarea"
          className="text-white p-3 rounded-lg bg-gray-600 flex flex-row items-center gap-4 "
        >
          <div className="rounded-full h-6 w-6 border"></div>
          <p className="text-xl font-semibold">{task.titulo}</p>
        </div>

        <div
          id="descripcion-tarea"
          className="flex flex-row items-center gap-4 "
        >
          <textarea
            placeholder="Descripción"
            className="text-white text-[1rem] p-3 rounded-lg bg-gray-600 w-full resize-none text-lg font-semibold"
          >
            {task.titulo}
          </textarea>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-2 items-center justify-center flex flex-row gap-3 text-white bg-gray-600 p-3 rounded-lg">
            <AlarmClock />
            <p>Creada: {task.fechaCreada ?? "ayer"}</p>
          </div>
          <div
            onClick={handleDelete}
            className=" items-center justify-center flex flex-row gap-3 text-white bg-gray-600 p-3 rounded-lg"
          >
            <Trash />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
