import { useRecoilState } from "recoil";
import { postListState } from "../atoms/PostListState";

export function PostItem({ post }) {
  const [postList, setPostList] = useRecoilState(postListState);
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "300px",
      }}
    >
      <span style={{ color: "gray", fontSize: "18px" }}>{post}</span>

      <button
        onClick={() => {
          setPostList((prev) => prev.filter((p) => p !== post));
        }}
      >
        Delete
      </button>
    </li>
  );
}
