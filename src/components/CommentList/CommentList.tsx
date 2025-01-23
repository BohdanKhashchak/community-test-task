import React from "react";
import { Comment } from "@utils/PostHelper";
import CommentItem from "@components/CommentItem/CommentItem";
import styles from "./CommentList.module.scss";

interface CommentListProps {
  comments: Comment[];
  postId: number;
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    text: string
  ) => void;
}

// Component for rendering a list of comments
const CommentList: React.FC<CommentListProps> = ({
  comments,
  postId,
  onAddComment,
}) => {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          postId={postId}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
