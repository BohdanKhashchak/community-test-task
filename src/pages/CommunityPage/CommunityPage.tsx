import React, { useState } from "react";
import styles from "./CommunityPage.module.scss";
import { initialPosts } from "@data/mockData";
import { Post, addPost, addComment } from "@utils/PostHelper";
import PostForm from "@components/PostForm/PostForm";
import PostList from "@components/PostList/PostList";

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => addPost(prevPosts, title, content));
  };

  const handleAddComment = (
    postId: number,
    parentCommentId: number | null,
    text: string
  ) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? addComment(post, parentCommentId, text) : post
      )
    );
  };

  return (
    <div className={styles.communityContainer}>
      <h1>Community Posts</h1>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} onAddComment={handleAddComment} />
    </div>
  );
};

export default CommunityPage;
