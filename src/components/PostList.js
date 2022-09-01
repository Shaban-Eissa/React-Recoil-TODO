import { useRecoilValue } from "recoil";
import { postListState } from "../atoms/PostListState";
import { PostItem } from "./PostItem";

export function PostList() {
  const postList = useRecoilValue(postListState);

  return (
    <ul>
      {postList.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
}
