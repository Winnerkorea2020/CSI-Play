"use client";

import { useRouter } from "next/navigation";
import TextEditor from "./TextEditor";

const WriteForm = () => {
  const router = useRouter();

  // Text Editor //

  const author = "홍길동";
  const watch = "0";
  const today = new Date();
  const dateTime = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} `;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;

        console.log(dateTime);

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, author, watch, dateTime }),
        };

        fetch("http://localhost:9999/tableList", options)
          .then((resp) => resp.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
          });
        router.push(`/table`);
      }}
    >
      <div className="w-full px-3 py-1.5 bg-white">
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          className="w-full py-2.5 px-3 border border-gray-200"
        />
      </div>

      {/* Text Editoer  and Test Area */}
      <div className="bg-white">
        <TextEditor />
      </div>
      <div>
        <input
          type="submit"
          value="create"
          className="py-3 px-2 btn btn-blue rounded-lg border shadow"
        />
      </div>
    </form>
  );
};

export default WriteForm;
