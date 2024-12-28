import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqan2qq",
        "template_3emhzxb",
        e.target,
        "rViCArmTeZsa-lczA",
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email!");
      });
  };

  return (
    <div className="flex flex-col mb-10 mx-auto dark:text-gray-50 text-black">
      <Title>Contact</Title>
      <div className="flex justify-center items-center">
        <form className="flex flex-col w-full md:w-7/12" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <Button
            type="submit"
            text="Work With Me"
            icon={<i className="fa-solid fa-paper-plane"></i>}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
