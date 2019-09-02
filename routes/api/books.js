const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .get(booksController.findAll)
  .post(bookController.create);

  router
    .rouote("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.romove);

    module.export = router;