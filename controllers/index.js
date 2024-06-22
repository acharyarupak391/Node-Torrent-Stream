const path = require("path");

const Torrent = require("../models");
let t;

function checkFileType(req) {
  if (req.files?.file?.length > 0) {
    file = req.files.file[0];
    if (
      file.originalname.endsWith(".torrent") &&
      file.mimetype.match("torrent")
    )
      return true;
    else return false;
  }
  return true;
}

module.exports = {
  getPage: (req, res) => {
    console.log(require.main.filename, require.main.path);
    res.sendFile(path.join(require.main.path, "client", "build", "index.html"));
  },

  getTorrentData: async (req, res) => {
    setTimeout(() => {
      if (!res.headersSent) {
        return res
          .status(408)
          .json({ error: "Took too long get the torrent data" });
      }
    }, 20000);

    if (!checkFileType(req)) {
      if (!res.headersSent) {
        return res.status(422).json({ error: "Invalid torrent file provided" });
      }
    }

    const torrentParameter = req.body?.magnet ?? req.files?.file[0].buffer;

    t = new Torrent(torrentParameter, res);
    t.getTorrentFiles(res);
  },

  streamTorrent: async (req, res) => {
    const index = req.query?.index;
    if (!index) {
      return res.status(400).json({ error: "No file index provided!" });
    }

    if (!t) {
      return res.status(400).json({ error: "Unable to stream torrent" });
    }
    t.stream(index, req, res);
  },
};
