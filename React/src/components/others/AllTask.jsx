import React from "react";

const AllTask = ({data} ) => {
  return (
    <div id="AllTask" className="bg-[#1C1C1C] flex-1 min-h-0 w-full pb-5 flex flex-col items-start justify-start gap-4 mt-4 rounded-xl overflow-y-auto px-10">
        <div className="bg-[#1C1C1C] py-2 sticky top-0 w-full h-max px-5 flex items-start justify-between ">
        <h2>Name</h2>
        <h3>Task</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-blue-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-red-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-green-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-pink-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-emerald-600 w-full h-max py-2 px-5 flex items-start justify-between rounded-md">
        <h2>Name</h2>
        <h3>Make UI</h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTask;
