import React, { useState } from "react";
import styles from "./PostForm.module.scss";
import Button from "@components/Button/ Button";
import Input from "@components/Input/Input";

interface PostFormProps {
  onAddPost: (title: string, content: string) => void;
}

// Component to create a new post
const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.postForm}>
      <div className={styles.formGroup}>
        <label>Title:</label>
        <Input value={title} setValue={setTitle} placeholder="Enter title" />
      </div>
      <div className={styles.formGroup}>
        <label>Post Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button isActive={Boolean(title.trim() && content.trim())} type="submit">
        Create Post
      </Button>
    </form>
  );
};

export default PostForm;
