export interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

/**
 * Add a new post to the start of the list.
 */
export const addPost = (
  posts: Post[],
  title: string,
  content: string
): Post[] => {
  const newPost: Post = {
    id: Date.now(),
    title,
    content,
    comments: [],
  };
  return [newPost, ...posts];
};

/**
 * Add a new comment to the post.
 */
export const addComment = (
  post: Post,
  parentCommentId: number | null,
  text: string
): Post => {
  const updatedPost = { ...post };

  if (parentCommentId === null) {
    updatedPost.comments.push({
      id: Date.now(),
      text,
      replies: [],
    });
  } else {
    updatedPost.comments = addReply(
      updatedPost.comments,
      parentCommentId,
      text
    );
  }

  return updatedPost;
};

/**
 * Add a new reply to the comment.
 */
const addReply = (
  commentsArray: Comment[],
  parentCommentId: number,
  text: string
): Comment[] => {
  return commentsArray.map((c) => {
    if (c.id === parentCommentId) {
      return {
        ...c,
        replies: [
          ...c.replies,
          {
            id: Date.now(),
            text,
            replies: [],
          },
        ],
      };
    }

    return {
      ...c,
      replies: addReply(c.replies, parentCommentId, text),
    };
  });
};
