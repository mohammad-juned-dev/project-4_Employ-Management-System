import React from "react";

const TaskListNumbers = ({data} ) => {
  return (
    <div className="w-full flex gap-5 ">
      <div className="bg-red-600/20 border border-red-300 backdrop:blur-xl w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2 className="w-1/5 bg-transparent text-center text-lg font-semibold">{data.taskcount.new_task}</h2>
        <h3>New Task</h3>
      </div>
        <div className="bg-blue-600/20 border border-blue-300 backdrop:blur-xl w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>{data.taskcount.active_task_count}</h2>
        <h3>Active Task</h3>
      </div>
        <div className="bg-green-600/20 border border-green-300 backdrop:blur-xl w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>{data.taskcount.completed_task_count}</h2>
        <h3>Completed Task</h3>
      </div>
        <div className="bg-orange-600/20 border border-orange-300 backdrop:blur-xl w-[40%] h-max px-5 py-10 rounded-xl">     
        <h2>{data.taskcount.failed_task_count}</h2>
        <h3>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
