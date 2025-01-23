import React, { useState } from "react";
import { Post } from "@utils/PostHelper";
import styles from "./PostItem.module.scss";
import Button from "@components/Button/ Button";

interface PostItemProps {
  post: Post;
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    text: string
  ) => void;
}

// Component for rendering a single post
const PostItem: React.FC<PostItemProps> = ({ post, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  // Function to handle for add new comment
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    onAddComment(post.id, null, commentText);
    setCommentText("");
  };

  return (
    <div className={styles.postItem}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <form onSubmit={handleSubmit} className={styles.addCommentForm}>
        <input
          type="text"
          placeholder="Leave a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button isActive={Boolean(commentText.trim())} type="submit">
          Comment
        </Button>
      </form>
    </div>
  );
};

export default PostItem;
