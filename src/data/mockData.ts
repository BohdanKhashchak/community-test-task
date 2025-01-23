import { Post } from "@utils/PostHelper";

// Initial mocks
export const initialPosts: Post[] = [
  {
    id: 1,
    title: "The first post",
    content: "This is a sample text for the first post",
    comments: [
      {
        id: 1,
        text: "This is the first comment for the first post",
        replies: [
          {
            id: 2,
            text: "And this is a reply to the first comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Second post",
    content: "Some text for the second post",
    comments: [],
  },
];
