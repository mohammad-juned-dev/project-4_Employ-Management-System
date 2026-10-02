import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="w-full flex gap-5 ">
      <div className="bg-red-600 w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
        <div className="bg-blue-600 w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
        <div className="bg-green-600 w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
        <div className="bg-yellow-400 w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
