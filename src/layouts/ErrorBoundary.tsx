import { useEffect, useState } from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  const navigate = useNavigate();

  const errorHandle = () => {
    navigate("/");
  };

  const [allowGoHome, setAllowGoHome] = useState(false);
  const errorCause = error?.statusText || error?.message;

  useEffect(() => {
    const isPermissionError =
      errorCause &&
      /You do not have permission to access Zmail/.test(errorCause);
    setAllowGoHome(!isPermissionError);
  }, [errorCause]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-24">
      <div className="text-center">
        <h1 className="font-bold">Oops!</h1>
        <p className="mt-4">
          {errorCause || "Sorry, an unexpected error has occurred."}
        </p>
      </div>
      <div className="text-center">
        {allowGoHome && <Button onClick={errorHandle}>Go home</Button>}
      </div>
    </div>
  );
}
