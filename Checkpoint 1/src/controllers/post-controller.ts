import { Request, Response } from "express";
import { posts, Post } from "../models/post-model";

export const getPosts = (req: Request, res: Response) => {
  res.json(posts);
};

export const createPost = (req: Request, res: Response) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const newPost: Post = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
};