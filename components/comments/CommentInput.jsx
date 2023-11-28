const CommentInput = () => {
  const isAuthority = true;
  return (
    <div className="">
      {isAuthority ? (
        <form className="w-full mt-5">
          <textarea
            name="reply"
            rows={`3`}
            className="border w-full resize-none px-2 py-2.5 rounded-lg"
            placeholder="댓글을 입력하세요."
          ></textarea>
          <div className="mt-3 flex justify-end items-center gap-1 w-full">
            <input
              type="submit"
              name="button"
              className="py-1.5 px-2.5 border bg-yellow-500 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs w-20 cursor-pointer shadow text-white"
              value="등록하기"
            />
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default CommentInput;
