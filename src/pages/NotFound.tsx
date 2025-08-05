import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-4 -mt-24">
      <img src="/mail-not-found.svg" alt="Not Found" />
      <div className="text-center">
        <h1 className="font-semibold text-xl">404</h1>
      </div>
      <div className="text-center text-base">
        The page you’re looking for can't be found
      </div>
      <div className="mt-4">
        <Button onClick={() => navigate("/")}>Go home</Button>
      </div>
    </div>
  );
}
