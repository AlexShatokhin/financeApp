const router = require('express').Router();
const muscleGroupController = require('../controllers/muscleGroup');

router.get("/", (req, res) => {
    res.send("Welcome to the server!");
})

router.route("/muscle-group")
    .post(muscleGroupController.create)
    .get(muscleGroupController.getAll)

router.route("/muscle-group/:id")
    .get(muscleGroupController.getById)
    .put(muscleGroupController.update)
    .delete(muscleGroupController.delete);


router.route("/exercise")
    .post()
    .get()

router.route("/exercise/:id")
    .get()
    .put()
    .delete();

module.exports = router;