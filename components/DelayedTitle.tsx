import { FC, useEffect, useState } from "react";

interface DelayedTitleProps {
    speed: number;
    firstMessage: string;
    secondMessage: string;
  }

  const Typer = ({ speed = 250, firstTextPart = "Introduce your first text", secondTextPart = "Introduce your first text" }) => {
    const [idx, setidx] = useState(0);
    useEffect(() => {
      const timer = window.setInterval(() => setidx((v) => v + 1), speed);
      return () => window.clearInterval(timer);
    });

    return (
      <div className="dark:text-white">
        {firstTextPart}{" "}
        <span className="text-blue-600">{secondTextPart.substring(0, idx)}</span>
      </div>
    );
  };

const DelayedTitle: FC<DelayedTitleProps> = ({ speed, firstMessage, secondMessage }) => {
    return (
      <div>
        <Typer speed={speed} firstTextPart={firstMessage} secondTextPart={secondMessage}></Typer>
      </div>
    );
  };


  export default DelayedTitle;