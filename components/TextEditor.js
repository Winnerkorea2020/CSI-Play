"use client";

import { useState, useRef } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="h-full p-5">
      <div className="flex flex-col xl:flex-row xl:justify-start xl:items-center gap-2 mb-3">
        <div className="inline-flex items-center justify-start gap-2">
          <label
            htmlFor="countries"
            className="block text-start text-sm font-medium p-2.5 w-16"
          >
            게시판
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          >
            <option selected>코인</option>
            <option value="US">주식</option>
            <option value="CA">선물/마진</option>
            <option value="FR">부동산</option>
            <option value="DE">뉴스</option>
          </select>
        </div>
        <div className="flex xl:items-center xl:justify-start gap-2 ">
          <label
            htmlFor="base-input"
            className="block text-start text-sm font-medium p-2.5 w-16"
          >
            제목
          </label>
          <input
            type="text"
            id="base-input"
            placeholder="제목을 입력하세요."
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full xl:w-3/5"
          />
        </div>
      </div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default TextEditor;
