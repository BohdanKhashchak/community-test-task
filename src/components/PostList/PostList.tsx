import React from "react";
import { Post } from "@utils/PostHelper";
import PostItem from "@/components/PostItem/PostItem";
import styles from "./PostList.module.scss";

interface PostListProps {
  posts: Post[];
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    text: string
  ) => void;
}

// Component for rendering a list of posts
const PostList: React.FC<PostListProps> = ({ posts, onAddComment }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onAddComment={onAddComment} />
      ))}
    </div>
  );
};

export default PostList;
