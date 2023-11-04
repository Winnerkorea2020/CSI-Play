"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import QuillToolbar from "../quill/QuillToolbar";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor() {
  const [content, setContent] = useState("");
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="w-full h-full bg-white px-2 py-2.5 -mb-10">
      <QuillEditor
        theme="snow"
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        className="w-full h-full"
      />
    </div>
  );
}
