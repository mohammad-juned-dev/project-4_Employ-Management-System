import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = ({ data }) => {
  const Authdata = useContext(AuthContext);
  console.log(Authdata.employee);

  return (
    <div
      id="AllTask"
      className="bg-[#1C1C1C] flex-1 min-h-0 w-full pb-5 flex flex-col items-start justify-start gap-4 mt-4 rounded-xl overflow-y-auto px-10"
    >
      <div className="bg-[#1C1C1C] py-2 sticky top-0 w-full h-max px-5 flex items-start justify-between gap-5 ">
        <h2 className="w-1/5 bg-pink-500 text-center text-xl ">
          Name
        </h2>
        <h3 className="w-1/5 bg-pink-500 text-center text-xl ">
          Active Tasks
        </h3>
        <h5 className="w-1/5 bg-pink-500 text-center text-xl ">
          New Tasks
        </h5>
        <h5 className="w-1/5 bg-pink-500 text-center text-xl ">
          Completed Tasks
        </h5>
        <h5 className="w-1/5 bg-pink-500 text-center text-xl ">
          Failed Tasks
        </h5>
      </div>
      <div
        id="AllTaskInner"
        className="bg-[#1C1C1C] flex-1 min-h-0 w-full pb-5 flex flex-col items-start justify-start gap-4 mt-4 rounded-xl overflow-y-auto "
      >
        {Authdata.employee.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-blue-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md gap-5"
            >
              <h2 className="w-1/5 bg-pink-500 text-center text-lg font-semibold">
                {elem.name}
              </h2>
              <h3 className="w-1/5 bg-pink-500 text-center text-lg font-semibold">
                {elem.taskcount.active_task_count}
              </h3>
              <h5 className="w-1/5 bg-pink-500 text-center text-lg font-semibold">
                {elem.taskcount.new_task}
              </h5>
              <h5 className="w-1/5 bg-pink-500 text-center text-lg font-semibold">
                {elem.taskcount.completed_task_count}
              </h5>
              <h5 className="w-1/5 bg-pink-500 text-center text-lg font-semibold">
                {elem.taskcount.failed_task_count}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
