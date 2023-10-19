import TextEditor from "@/components/TextEditor";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-full pb-2">
      <div className="container mx-auto max-w-9xl h-full bg-white p-5">
        {children}
      </div>
    </div>
  );
};

export default layout;
