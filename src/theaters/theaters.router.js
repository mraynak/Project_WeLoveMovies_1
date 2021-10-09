const router = require("express").Router({mergeParms: true})
const controller = require("./theaters.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;