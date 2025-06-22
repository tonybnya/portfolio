import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Button from "../components/Button";

const Thanks = () => {
  const navigate = useNavigate();

  gsap.registerPlugin(SplitText);

  let split = SplitText.create(".msg", {
    type: "chars, words, lines",
    mask: "lines",
  });

  gsap.from(split.chars, {
    yPercent: "random([-100, 100])",
    rotation: "random(-30, 30)",
    ease: "back.out",
    autoAlpha: 0,
    repeat: 4,
    yoyo: true,
    stagger: {
      amount: 0.5,
      from: "random",
    },
  });

  useGSAP(() => {
    gsap.to("#thanks", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      },
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f1115] text-white">
      <h1
        id="thanks"
        className="opacity-0 translate-y-10 text-4xl font-bold mb-4"
      >
        Thank You!
      </h1>
      <p className="msg text-xl mb-8 text-center max-w-md">
        I have received your message and will respond to you as soon as
        possible.
      </p>
      <Button
        text="Return Home"
        onClick={() => navigate("/")}
        icon={<i className="fa-solid fa-home animate-bounce"></i>}
      />
    </div>
  );
};

export default Thanks;

