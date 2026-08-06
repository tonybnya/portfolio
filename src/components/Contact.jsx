import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import Button from "./Button";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();
  const isSending = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending.current || !validateForm()) {
      return;
    }

    isSending.current = true;
    setFormError("");

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hqan2qq",
        "template_3emhzxb",
        e.target,
        "rViCArmTeZsa-lczA",
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        navigate("/thanks");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setFormError("Could not send your message. Please try again.");
      })
      .finally(() => {
        isSending.current = false;
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="flex flex-col mb-10 mx-auto text-gray-50">
      <Title>Contact</Title>
      <div className="flex justify-center items-center mt-8">
        <form className="flex flex-col w-full md:w-7/12" onSubmit={sendEmail}>
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Your name"
              value={formData.name}
              onChange={handleChange}
              className={`p-2 w-full bg-transparent border-2 border-[#4A5565] rounded-md focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 font-mona text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="my-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Your email"
              value={formData.email}
              onChange={handleChange}
              className={`p-2 w-full bg-transparent border-2 border-[#4A5565] rounded-md focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 font-mona text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="10"
              className={`p-2 w-full bg-transparent border-2 border-[#4A5565] rounded-md focus:outline-none ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 font-mona text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {formError && (
            <p className="text-red-500 font-mona text-sm mb-4 text-center" role="alert">
              {formError}
            </p>
          )}

          <Button
            type="submit"
            text={isSubmitting ? "Sending..." : "Work With Me"}
            icon={<i className="fa-solid fa-paper-plane"></i>}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
