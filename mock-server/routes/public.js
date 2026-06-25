import { Router } from "express";
import { posts } from "../data/mockData.js";

const router = Router();

router.get("/api/posts", (req, res) => {
  res.json({
    success: true,
    data: posts,
  });
});

router.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      error: "Not Found",
      message: "Postingan tidak ditemukan.",
    });
  }

  res.json({
    success: true,
    data: post,
  });
});

export default router;
