import React, { useState } from "react";

const Login = ({ handleLogin }) => {
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
    const val = value;
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
    let newErrors = {
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

    handleLogin(formdata.email, formdata.password);

    setFormdata({
      email: "",
      password: "",
    });
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const SubmitHandler = (e) => {
  //   e.preventDefault();

  //   setEmail("")
  //   setPassword("")
  // };

  return (
    <div className="bg-[#1C1C1C] h-screen w-screen flex flex-col items-center justify-center">
      <div className="h-[30rem] w-max px-10 py-10 border-2 border-solid border-emerald-700  flex flex-col items-center justify-around rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="self-start justify-self-start text-2xl">Log In</h1>
          <form
            onSubmit={(e) => {
              // SubmitHandler(e);
              handleSubmit(e);
            }}
            className="h-max w-max px-10 py-10 flex flex-col items-center justify-center gap-5 "
          >
            <input
              className=" px-5 py-1 outline-none border-2 border-solid border-emerald-700 rounded-full placeholder:text-gray-400 text-black"
              type="text"
              value={formdata.email}
              onChange={(e) => {
                onChange(e);
                // setEmail(e.target.value);
              }}
              name="email"
              id=""
              placeholder="Enter Your Email"
              autoComplete="new-password"
            />
            {errors.email && (
              <p className="text-rose-500 text-xs  font-medium">
                {errors.email}
              </p>
            )}
            <input
              className="text-black px-5 py-1 outline-none border-2 border-solid border-emerald-700 rounded-full placeholder:text-gray-400"
              type="password"
              name="password"
              value={formdata.password}
              onChange={(e) => {
                onChange(e);
                // setPassword(e.target.value);
              }}
              id=""
              placeholder="Enter Your Password"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="text-rose-500 text-xs font-medium">
                {errors.password}
              </p>
            )}
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
