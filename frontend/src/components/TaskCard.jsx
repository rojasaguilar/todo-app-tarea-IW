import { useState } from "react";

function TaskCard({ task, key, handleCompleted }) {
  const [estado, setEstado] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center gap-4 bg-gray-900 p-3 rounded-lg">
        {/* TITULO */}
        <div
          onClick={() => {
            handleCompleted(task);
          }}
          className="h-6 border w-6 rounded-full border-white"
        ></div>
        <p className="text-white"> {task.titulo}</p>
      </div>
    </>
  );
}

export default TaskCard;
