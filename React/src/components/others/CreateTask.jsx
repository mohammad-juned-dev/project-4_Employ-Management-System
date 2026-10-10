import React, { useState } from "react";

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    date: "",
    assignedTo: "",
    category: "",
  });

  const [newTask, setNewTask] = useState({});

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    date: "",
    assignedTo: "",
    category: "",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const submitHndler = (e) => {
    e.preventDefault();
    let newerrors = {
      title: "",
      description: "",
      date: "",
      assignedTo: "",
      category: "",
    };

    let isvalid = true;

    if (!taskData.title) {
      isvalid = false;
      newerrors.title = "The title of the task is required";
    }
    if (!taskData.description) {
      isvalid = false;
      newerrors.description = "The description of the task is required";
    }
    if (!taskData.date) {
      isvalid = false;
      newerrors.date = "The date of the task is required";
    }
    if (!taskData.assignedTo) {
      isvalid = false;
      newerrors.assignedTo = "The name of reciever is required";
    }
    if (!taskData.category) {
      isvalid = false;
      newerrors.category = "The category of the task is required";
    }

    setErrors(newerrors);
    if (!isvalid) return;

    setNewTask({
      title: taskData.title,
      description: taskData.description,
      date: taskData.date,
      category: taskData.category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((elem) => {
      if (taskData.assignedTo == elem.name) {
        console.log(elem.name);
        elem.tasks.push(newTask);
        console.log(elem.tasks);
      }
    });

    // setTaskData({
    //     title: "",
    //     description: "",
    //     date: "",
    //     assignedTo: "",
    //     category: "",
    //   })

    // Keep the entered values until task assignment/creation is implemented.
  };
  return (
    <div className="bg-[#1C1C1C] h-max w-full px-10 py-2 flex items-start justify-between rounded-xl ">
      <form
        onSubmit={submitHndler}
        className="h-full w-full flex items-start justify-between rounded-xl"
        action=""
      >
        <div className="w-1/2 flex items-start flex-col justify-start gap-2 ">
          <h1 className="text-3xl font-semibold">Create Task</h1>
          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Task Title</h3>
            <input
              value={taskData.title}
              name="title"
              onChange={(e) => {
                onchange(e);
              }}
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              placeholder="Create the Design"
            />
            {errors.title && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.title}
              </p>
            )}
          </div>

          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Date</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="date"
              value={taskData.date}
              name="date"
              onChange={(e) => {
                onchange(e);
              }}
              placeholder="Create the Design"
            />
            {errors.date && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.date}
              </p>
            )}
          </div>

          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Assigned to</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              value={taskData.assignedTo}
              name="assignedTo"
              onChange={(e) => {
                onchange(e);
              }}
              placeholder="e.g. John"
            />
            {errors.assignedTo && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.assignedTo}
              </p>
            )}
          </div>
          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Category</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              value={taskData.category}
              name="category"
              onChange={(e) => {
                onchange(e);
              }}
              placeholder="Design, Bug fixing, deployment, etc. "
            />
            {errors.category && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.category}
              </p>
            )}
          </div>
        </div>

        <div className=" w-1/2 h-max p-10 flex items-start flex-col justify-start gap-2">
          <div>
            {" "}
            <h3 className="text-base font-semibold mt-2">Description</h3>
            <textarea
              value={taskData.description}
              name="description"
              onChange={(e) => {
                onchange(e);
              }}
              className="text-white placeholder:text-gray-500 bg-transparent w-[37.5em] h-[16em] placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              id=""
              placeholder="Description"
            ></textarea>{" "}
            {errors.description && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.description}
              </p>
            )}
          </div>
          <button className="text-white  bg-emerald-500 w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none hover:bg-emerald-600 transition-all active:scale-95">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
