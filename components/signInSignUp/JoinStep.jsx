import React from "react";

const JoinStep = (activiy1, activiy2) => {
  const step1 = activiy1;
  const step2 = activiy2;
  console.log(activiy1);
  console.log(activiy2);
  return (
    <div className="mt-8 mb-16">
      <ol className="flex flex-col xl:flex-row xl:items-center w-full text-sm font-medium text-center text-gray-800  sm:text-base">
        <li
          className={`flex md:w-full items-center ${
            activiy1 === true ? "" : "text-blue-600"
          }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 `}
        >
          <span className="flex items-center w-32">1. 약관동의</span>
        </li>
        <li
          className={`flex md:w-full items-center 
          ${
            step2 === true ? "" : "text-blue-600"
          }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-1 after:hidden sm:after:inline-block after:mx-6 `}
        >
          <span className="flex items-center w-32">2. 기본정보</span>
        </li>
        <li className="flex items-center w-32">
          <span className="flex items-center w-32">3. 기본정보</span>
        </li>
      </ol>
    </div>
  );
};

export default JoinStep;
