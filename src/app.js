require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/users.routes");
const itemRoutes = require("./routes/items.routes");
const commentsRoutes = require("./routes/comments.routes");
const likeRoutes = require("./routes/like.routes"); 

const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/items", itemRoutes);
app.use("/comments", commentsRoutes);
app.use("/like", likeRoutes); 

app.use(errorHandler);

module.exports = app;
