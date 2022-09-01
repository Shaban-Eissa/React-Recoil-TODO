import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { postListState } from "../atoms/PostListState";

export function PostCreate() {
  const [title, setTitle] = useState("");
  const setPostListState = useSetRecoilState(postListState);

  function handleSubmit(e) {
    e.preventDefault();
    setPostListState((prev) => [...prev, title]);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        typ="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create TODO</button>
    </form>
  );
}
