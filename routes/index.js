var express = require("express");
var router = express.Router();
const CyclicDB = require("@cyclic.sh/dynamodb");
const db = CyclicDB(process.env.CYCLIC_DB);
let contentdb = db.collection("content");

router.post("/", async function (req, res, next) {
  const { content } = req.body;
  await contentdb.set(Content, content);
  res.end();
});

router.get("/", async function (req, res, next) {
  let list = await contentdb.list();
  res.send(list);
});

module.exports = router;
