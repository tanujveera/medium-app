import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const StoryTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
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
    "video",
  ];

  const handlePublish = () => {

  }

  return (
    <div className="my-6">
      <div className="my-4 flex justify-center">
        <input className="border border-slate-300 rounded-md shadow-lg px-20 py-2" type="text" />
      </div>
      <ReactQuill
        value={editorValue}
        onChange={setEditorValue}
        modules={modules}
        formats={formats}
        className="bg-white rounded-lg shadow-lg"
      />
      <div className="flex flex-col items-end">
        <button onClick={handlePublish} className="text-white bg-green-500 px-4 py-1 rounded-full ml-2 mt-4 ">
          Publish
        </button>
      </div>
    </div>
  );
};

export default StoryTextEditor;
