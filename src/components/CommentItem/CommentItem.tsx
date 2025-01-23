import React, { useState } from "react";
import { Comment } from "@utils/PostHelper";
import CommentList from "@components/CommentList/CommentList";
import styles from "./CommentItem.module.scss";
import Button from "@components/Button/ Button";
import Input from "@components/Input/Input";

interface CommentItemProps {
  comment: Comment;
  postId: number;
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    text: string
  ) => void;
}

// Component for rendering a single comment
const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  postId,
  onAddComment,
}) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  // Function to handle for add new reply
  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onAddComment(postId, comment.id, replyText);
    setReplyText("");
    setShowReplyForm(false);
  };

  return (
    <div className={styles.commentItem}>
      <p>{comment.text}</p>

      <Button onClick={() => setShowReplyForm(!showReplyForm)} type="submit">
        {showReplyForm ? "Cancel" : "Reply"}
      </Button>

      {showReplyForm && (
        <form onSubmit={handleReply} className={styles.replyForm}>
          <Input
            value={replyText}
            setValue={setReplyText}
            placeholder="Leave a reply..."
          />
          <Button isActive={Boolean(replyText.trim())} type="submit">
            Comment
          </Button>
        </form>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <CommentList
          comments={comment.replies}
          postId={postId}
          onAddComment={onAddComment}
        />
      )}
    </div>
  );
};
export default CommentItem;
