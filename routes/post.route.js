"use strict";

const express = require("express");
const { posts, postsModel, commentModel } = require("../models");
const { bearerAuth } = require("../middlewares/bearerAuth");
const router = express.Router();
const { acl } = require('../middlewares/AccessControlList');

router.post("/post", bearerAuth, acl('create'),addPost);
router.get("/post", bearerAuth, acl('read'), getAllPosts);
router.get("/post/:id", bearerAuth,acl('read'), gitOnePost);
router.put("/post/:id", bearerAuth, acl('update'),updatePost);
router.delete("/post/:id", bearerAuth,acl('delete'), deletePost);

async function addPost(req, res) {
  res.status(201).send(await posts.addOn(req.body));
}
async function getAllPosts(req, res) {
  let allPostsWithCommnets = await postsModel.findAll({
    include: [commentModel],
  });
  res.status(200).send(allPostsWithCommnets);
}
async function gitOnePost(req, res) {
  res.status(200).send(await posts.getFrom(req.params.id));
}
async function updatePost(req, res) {
  res.status(202).send(await posts.updateAt(req.body, req.params.id));
}
async function deletePost(req, res) {
  await posts.deleteFrom(req.params.id);
  res.status(204).end();
}

module.exports = router;