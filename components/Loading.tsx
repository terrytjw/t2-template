import React from "react";
import Image from "next/image";
import PulseLoader from "react-spinners/PulseLoader"; // other variants available on https://www.davidhu.io/react-spinners/

type LoadingProps = {
  fullScreen: boolean;
};
const Loading = ({ fullScreen }: LoadingProps) => {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "h-screen" : ""
      }`}
    >
      <div className="animate-bounce">
        <h1 className="animate-pulse text-xl font-semibold">Loading</h1>
      </div>
      <div className="mt-2 flex items-center justify-center space-x-2">
        <PulseLoader size={10} color="#CFCFCF" speedMultiplier={0.8} />
      </div>
    </div>
  );
};

export default Loading;
