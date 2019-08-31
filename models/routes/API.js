const axios = require("axios");
const db = require("../../models");
const router = require("express").Router();

router.get("/api/books", (req,res) => {
  console.log(req.query)
  axios
    .get("https://www.googleapis.com/books/v1/volumes", {params: req.query })
    .then((results) => res.json(results.data.items))
    .catch(err => res.status(422).json(err));
});

module.exports = router;