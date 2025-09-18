//import React from "react";
import loadingGif from "../assets/loading.gif"; // adjust path if needed

const Loading = ({ text = "Please wait..." }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Show GIF instead of spinner */}
      <img src={loadingGif} alt="Loading..." className="w-12 h-12" />
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Loading;
