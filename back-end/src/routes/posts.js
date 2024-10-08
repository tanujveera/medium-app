import express from "express";
import z from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../data/config.js";
import { authMiddleware } from "../authMiddleware.js";
import bcrypt from "bcrypt";
import { HTTP } from "../data/constants.js";
import {
  addPost,
  allPosts,
  allUserPosts,
  deletePost,
  getPost,
  getUser,
  updatePost,
} from "../schema/schema.js";

export const postsRouter = express.Router();

// Add a post
const createPost = z.object({
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean(),
});

postsRouter.post("/posts", authMiddleware, async (req, res) => {
  const { success } = createPost.safeParse(req.body);
  const { title, content, published } = req.body;
  if (!success) {
    res.status(HTTP.LENGTH_REQUIRED).json({
      msg: "Error while creating post",
    });
  }
  try {
    const post = await addPost(title, content, published, req.userId);
    res.status(HTTP.OK).json({
      msg: "Post published successfully",
      posts:post
    });
  } catch (e) {
    console.log(e);
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({
      error: "Error in creating post",
    });
  }
});

// Get a specific post
postsRouter.get("/posts/:postId", async (req, res) => {
  const { postId } = req.params;  
  try {
      const posts = await getPost(postId);
      res.json({
        msg: "Fetched Posts",
        post: posts,
      });
  } catch (e) {
    console.log(e);
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({
      msg: "Internal Server Error",
    });
  }
});

// Get all user posts
postsRouter.get("/userposts", authMiddleware, async (req, res) => {
  const user = await getUser(req.userId);
  try {
    if (user) {
      const posts = await allUserPosts(req.userId);
      res.json({
        msg: "Fetched All Posts",
        posts: posts,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({
      msg: "Internal Server Error",
    });
  }
});

// Get all posts
postsRouter.get("/allposts", async (req, res) => {
  const posts = await allPosts();
  try {
    if (posts) {
      res.status(HTTP.OK).json({
        msg: "Fetched all posts",
        posts: posts,
      });
    }
  } catch (e) {
    res.status(HTTP.NOT_FOUND).json({
      msg: "No posts",
    });
  }
});

// Delete post
postsRouter.delete("/posts", authMiddleware, async (req, res) => {
  const posts = await getPost(req.body.id, req.userId);
  if (posts) {
    await deletePost(req.body.id, req.userId);
    res.status(HTTP.OK).json({
      msg: "Post deleted",
    });
  }
});

// Update post
postsRouter.put("/posts", authMiddleware, async (req, res) => {
  const { id, data } = req.body;
  const posts = await getPost(id, req.userId);
  try {
    if (posts) {
      await updatePost(id, req.userId, data);
      res.status(HTTP.OK).json({
        msg: `Post updated ${id}`,
      });
    }
  } catch (e) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({
      msg: "Internal Server Error",
    });
  }
});

