import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";

const Thanks = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      "#thanks",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" },
    );

    gsap.fromTo(
      ".msg",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.3, duration: 0.7, ease: "power1.out" },
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1
        id="thanks"
        className="text-4xl font-sans font-medium mb-4 tracking-normal"
      >
        Thank You!
      </h1>
      <p className="msg font-sans mb-8 text-center max-w-md">
        I have received your message and will respond as soon as possible.
      </p>
      <Button
        text="Return Home"
        onClick={() => navigate("/")}
        icon={<i className="fa-solid fa-home"></i>}
      />
    </div>
  );
};

export default Thanks;