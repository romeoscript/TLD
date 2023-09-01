"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "../images/bg.png";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  overflow: "auto",
  height: "80vh!important",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, handleClose }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      phoneNumber: formData.get("product-service-field"),
      productOrService: formData.get("product-service-description"),
      businessSize: formData.get("businessSize"),
      budget: formData.get("budget"),
      virtualMeetingDate: formData.get("virtual-meeting-date"),
    };
    console.log(data);

    try {
      const response = await axios.post(
        "api/quote",
        data
      );
      console.log("Form submitted successfully", response.data);
      // Handle success or any response data
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} className="w-full text-black z-30">
          <h2 className="text-center font-bold text-3xl my-[1rem]">
            Fill the <span className="text-[#F16232]">Form</span> Below
          </h2>
          <div className="flex items-center gap-[5%] z-20">
            <div className="w-full">
              <FormLabel htmlFor="name-field" className="required-label ">
                Name <span className="text-[red]">*</span>
              </FormLabel>
              <TextField className="w-[98%]" name="fullname" id="fullname" label="fullname" />
            </div>
            <div className="w-full">
              <FormLabel htmlFor="email-field" className="required-label ">
                Email<span className="text-[red]">*</span>
              </FormLabel>
              <TextField
                className="w-[98%]"
                id="email"
                name="email"
                label="Work email"
              />
            </div>
          </div>
          <figure className="my-[2rem]">
            <FormLabel
              htmlFor="product-service-field"
              className="required-label block"
            >
              Phone Number <span className="text-[red]">*</span>
            </FormLabel>
            <TextField
              className="w-full"
              id="product-service-field"
              name="product-service-field"
              label="your whatsapp number "
            />
          </figure>
          <figure className="mb-[1rem]">
            <FormLabel
              htmlFor="product-service-field"
              className="required-label block"
            >
              BRIEFLY EXPLAIN YOUR PRODUCT OR SERVICE{" "}
              <span className="text-[red]">*</span>
            </FormLabel>
            <TextField
              label="You can begin by stating the name of your brand"
              className="w-full"
              id="product-service-description"
              name="product-service-description"
              variant="outlined"
              multiline
              rows={4}
            />
          </figure>
          <FormControl component="fieldset">
            <FormLabel component="legend">BUSINESS SIZE</FormLabel>
            <RadioGroup aria-label="businessSize" id='businessSize' name="businessSize">
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Small Business (1-5 employees)"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium-Sized Business (6-20 Employees)"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="Large Organization (More than 20 Employees)"
              />
            </RadioGroup>
          </FormControl>
          <br /> <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              WHAT IS YOUR BUDGET FOR THIS PROJECT?
            </FormLabel>
            <RadioGroup aria-label="budget" name="budget"  id="budget">
              <FormControlLabel
                value="basic"
                control={<Radio />}
                label="Basic Website ($500)"
              />
              <FormControlLabel
                value="highFunction"
                control={<Radio />}
                label="High Functioning Website ($1000 - $3000)"
              />
              <FormControlLabel
                value="customApp"
                control={<Radio />}
                label="Custom Web Application (Custom Pricing)"
              />
            </RadioGroup>
          </FormControl>
          <figure className="my-[2rem]">
            <FormLabel
              htmlFor="product-service-field"
              className="required-label block"
            >
              CAN WE SET UP A VIRTUAL MEETING AT YOUR CONVENIENCE?{" "}
              <span className="text-[red]">*</span>
            </FormLabel>
            <TextField
              className="w-full"
              id="virtual-meeting-date"
              name="virtual-meeting-date"
              type="date"
            />
          </figure>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const Presence: React.FC = () => {
  const [first, setfirst] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = usePathname();

  useEffect(() => {
    if (router === "/") {
      setfirst(true);
    }
  }, [router]);

  return (
    <div className="h-[60vh] relative flex items-center justify-center flex-col text-black ">
      <img
        src={bg.src}
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt=""
      />
      <h2 className="z-20 font-bold text-4xl">
        {first
          ? "Elevate Your Digital Presence With Us"
          : "Ready to Amplify Your Digital Presence?"}
      </h2>
      <p className="z-20 my-[4rem]">Don’t wait any longer!</p>
      {first ? (
        <button className="bg-[#F16232] rounded-md text-white px-[2rem] py-[0.5rem] z-20">
          Contact us
        </button>
      ) : (
        <button
          className="bg-[#F16232] rounded-md text-white px-[2rem] py-[0.5rem] z-20"
          onClick={() => setOpenModal(true)}
        >
          Get Quote
        </button>
      )}
      <BasicModal open={openModal} handleClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Presence;
