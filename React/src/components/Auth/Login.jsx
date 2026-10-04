import React, { useState } from "react";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormdata((prev) => ({
      ...prev,
      [name]: val,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: "",
      password: "",
    };

    let isValid = true;

    if (!formdata.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formdata.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    console.log(formdata);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="h-[30rem] w-max px-10 py-10 border-2 border-solid border-emerald-700  flex flex-col items-center justify-around rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="self-start justify-self-start text-2xl">Log In</h1>
          <form
            onSubmit={handleSubmit}
            className="h-max w-max px-10 py-10 flex flex-col items-center justify-center gap-5 "
          >
            <input
              required={true}
              className=" px-5 py-1 outline-none border-2 border-solid border-emerald-700 rounded-full placeholder:text-gray-400"
              type="text"
              value={formdata.email}
              onChange={onChange}
              name="email"
              id=""
              placeholder="Enter Your Email"
              autoComplete="new-password"
            />
            <input
              required={true}
              className=" px-5 py-1 outline-none border-2 border-solid border-emerald-700 rounded-full placeholder:text-gray-400"
              type="password"
              value={formdata.password}
              name="password"
              onChange={onChange}
              id=""
              placeholder="Enter Your Password"
              autoComplete="new-password"
            />
            <input type="checkbox" className="self-start " />
            <button className=" w-full px-5 py-1 bg-emerald-700 rounded-full transition-all active:scale-95 text-white">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
