const router = require("express").Router();
module.exports = router;

//Route: /api
router.use("/students", require("./students"));
router.use("/classes", require("./classes"));
router.use("/subjects", require("./subjects"));
router.use("/class_subjects", require("./class_subjects"));
router.use("/class_students", require("./class_students"));
router.use("/professors", require("./professors"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
