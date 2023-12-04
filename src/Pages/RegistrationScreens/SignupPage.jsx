import React, { useState } from "react";
import postData from "../../utils/postData";

const SignupPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:5000/signup";

  //On submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const new_user = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };

    // postData Sends the data to the server, returns Json Object
    postData(new_user, url).then((res) => {
      alert(res.msg);
    });
  };

  // rendered component
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl text-orange-600 font-extrabold">
        Sign Up
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div>
            <label htmlFor="name" className="sr-only">
              Fname
            </label>
            <input
              id="fname"
              name="fname"
              type="text"
              required
              className="w-[95%] px-4 py-2 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600 focus:outline-none placeholder-gray-500 text-gray-900 "
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="sr-only">
              Lname
            </label>
            <input
              id="lname"
              name="lname"
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-[95%] px-4 py-2 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600 focus:outline-none placeholder-gray-500 text-gray-900 "
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600 focus:outline-none placeholder-gray-500 text-gray-900 "
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            minLength={8}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600 focus:outline-none placeholder-gray-500 text-gray-900 "
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 shadow-lg text-white mb-4 py-3 px-4 rounded-[20px] hover:bg-orange-300 focus:outline-none hover:scale-105 transition ease-in-out"
          >
            Sign Up
          </button>
          <button
            onClick={() => props.func("back")}
            className="w-full outline outline-1 outline-offset-0 outline-orange-600 shadow-lg text-orange-600 py-3 px-4 rounded-[20px] hover:bg-orange-300 hover:text-white hover:outline-none "
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
