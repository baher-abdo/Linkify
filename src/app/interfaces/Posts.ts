export interface User {
  _id: string;
  name: string;
  photo: string;
}

export interface CommentCreator extends User {}

export interface Comments {
  _id: string;
  content: string;
  commentCreator: CommentCreator;
  post: string;
  createdAt: string;
}

export interface Post {
  _id: string;
  body: string;
  image: string;
  user: User;
  createdAt: string;
  comments: Comments[];
  id: string;
}
