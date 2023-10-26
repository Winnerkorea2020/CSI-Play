import React from "react";

const page = () => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <div className="mt-2">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default page;
