import React from "react";

function TaskCard({ task, key }) {
  return (
    <>
      <div className="flex flex-row items-center gap-4 bg-gray-900 p-3 rounded-lg">
        {/* TITULO */}
        <div className="h-6 border w-6 rounded-full"></div>
        <p className=""> {task.titulo}</p>
      </div>
    </>
  );
}

export default TaskCard;
