import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="bg-blue-600/20 border border-blue-300 backdrop-blur-xl h-full min-h-0 w-[21%] rounded-xl flex flex-col flex-shrink-0 p-6">
      <div className="flex justify-between items-center w-full  ">
        <h3 className="bg-blue-600/10 border border-blue-300 backdrop:blur-xl w-max px-3 py-1 rounded-lg text-sm ">
          {data.category}
        </h3>
        <h2 className="text-sm">{data.task_date}</h2>
      </div>
      <h2 className="text-2xl mt-5 font-bold">{data.task_title}</h2>
      <h4 className="text-sm mt-2 w-full flex-1 min-h-0 overflow-y-auto">{data.task_description}</h4>
      <div className="mt-auto pt-4 w-full flex flex-col items-center justify-center gap-2">
        <button
          type="button"
          onClick={onComplete}
          className="bg-green-600/35  border-emerald-300 backdrop:blur-xl text-white text-sm px-3 py-1 transition-all active:scale-95 border-2  border-white-700 rounded-lg w-full "
        >
          Mark as Completed
        </button>
        <button
          type="button"
          onClick={onFail}
          className="bg-red-600/35  border-red-300 backdrop:blur-xl  text-white text-sm px-3 py-1 transition-all active:scale-95 border-2  border-white-700 rounded-lg w-full"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
