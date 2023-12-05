"use client";
import { useState } from "react";

import "react-quill/dist/quill.snow.css";
import TableHead from "../table/TableHead";
import TableHeader from "../table/TableHeader";
import TableSideWarnning from "../table/TableSideWarnning";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Post = () => {
  const [quillValue, setQuillValue] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div className="h-[820px] relative ">
      <div className="grid grid-cols-12 gap-4 ">
        <div className=" col-span-9">
          <div className="pb-2">
            <input
              type="text"
              className="border w-full py-3 mt-2 px-5 border-gray-400"
              defaultValue={""}
              placeholder="제목을 입력하세요."
            />
          </div>
          <ReactQuill
            className="xl:h-[844px]"
            theme="snow"
            modules={modules}
            formats={formats}
            value={quillValue || ""}
            onChange={handleQuillChange}
          />
        </div>
        <div className="col-span-3 h-[820px]">
          <TableSideWarnning />
        </div>
      </div>
    </div>
  );
};

export default Post;
