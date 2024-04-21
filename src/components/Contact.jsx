import React from "react";
import Title from "./Title";
import Button from "./Button";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto dark:text-gray-50">
      <Title>Contact</Title>
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/lbkmekyb"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center mr-auto ml-auto inline-block px-8 py-3 w-max text-base font-medium rounded-md font-righteous text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;