import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-black">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        I have received your message and will respond to you as soon as possible.
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