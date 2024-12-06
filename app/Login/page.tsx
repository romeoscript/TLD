"use client";
import React from "react";
import { TextField } from "@mui/material";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log(data);

    try {
      const response = await axios.post("api/contact", data);
      console.log("Form submitted successfully", response.data);
      toast.success("Form submitted successfully");
      event.target.reset(); // Clear form input fields
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Error submitting form");
    }
  };
  return (
    <>
      <section className="bg-dark   overflow-hidden relative z-10 text-[#F16232]">
        <div className="container my-auto py-[3rem]">
          <div className="flex flex-wrap lg:justify-between m-auto ">
            
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 m-auto">
            <h1 className="m-auto text-center font-bold  text-3xl">Login</h1>
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
  
                <form
                  action="mailto:romeobourne@gmail.com"
                  method="post"
                  onSubmit={handleSubmit}
                >
                 
                  {/* <TextField
                    name="name"
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    sx={{ width: "100%" }}
                  /> */}

                  <TextField
                    name="Email"
                    helperText="Please enter your E-mail"
                    id="demo-helper-text-misaligned"
                    label="Email"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    name="password"
                    helperText="Please enter your Password"
                    id="demo-helper-text-misaligned"
                    label="Password"
                    sx={{ width: "100%" }}
                  />
                  {/* <TextField
                    name="password"
                    helperText="Please enter your Password"
                    id="demo-helper-text-misaligned"
                    label="Confirm Password"
                    sx={{ width: "100%" }}
                  /> */}
                
                  {/* <TextField
                    name="message"
                    id="outlined-multiline-static"
                    label="message"
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                  /> */}

                  <div>
                    <button
                      className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full p-[0.7rem] my-[1rem]"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
