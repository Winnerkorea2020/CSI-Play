import CalandarTypeA from "@/components/Calandar/CalandarTypeA";
import SearchBar from "@/components/searchbox/SearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10 ">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">증시캘린더</h3>
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 gap-3 w-full ">
          <CalandarTypeA />
        </div>
      </div>
    </div>
  );
};

export default page;
