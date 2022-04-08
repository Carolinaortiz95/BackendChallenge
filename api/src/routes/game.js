const { Router } = require("express");
const { Game } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const game = await Game.findAll();
    res.json(game);
  } catch (error) {
    res.send(error);
  }
}),
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const allGames = await Game.findAll();
    if (id) {
      let gameId = allGames.filter((e) => e.ID == id);
      gameId.length
        ? res.status(200).json(gameId)
        : res.status(404).send("No se encontro la partida");
    }
  }),
  router.post("/", async (req, res) => {
    let { game, cells } = req.body;
    let gameCreated = await Game.create({
      created: game.created,
      state: game.state,
      cells: cells,
    });

    res.send(gameCreated);
  });

module.exports = router;
