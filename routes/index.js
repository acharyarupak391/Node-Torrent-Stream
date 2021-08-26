const express = require("express");
const serverController = require("../controllers")
const multer = require("multer")

const router = express.Router();

router.get("/", serverController.getPage)

router.post("/torrent", multer().fields([{name: "magnet"}, {name: "file"}]), serverController.getTorrentData)

router.get("/stream", serverController.streamTorrent)

module.exports = router;