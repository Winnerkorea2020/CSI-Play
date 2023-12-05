import TableHeader from "@/components/table/TableHeader";
import React from "react";
import dynamic from "next/dynamic";

const page = () => {
  const DynamicPost = dynamic(() => import("@/components/postview/Post"));
  return <DynamicPost post={false} />;
};

export default page;
