const { Router } = require("express");

const router = Router();

const gameRouter = require("./game.js");

router.use("/game", gameRouter);

module.exports = router;
