var express = require("express");
var router = express.Router();
const CyclicDB = require("@cyclic.sh/dynamodb");
const db = CyclicDB(process.env.CYCLIC_DB);
let contentdb = db.collection("content");

router.post("/", async function (req, res, next) {
  console.log(req.body);
  const { Content } = req.body;
  await contentdb.set("Content", {
    result: Content,
  });
});

router.get("/", async function (req, res, next) {
  let list = await contentdb.get("Content");
  console.log(list);
  res.send(list);
});

module.exports = router;
