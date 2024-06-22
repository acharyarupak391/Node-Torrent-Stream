const fs = require("fs");
const path = require("path");
const WebTorrent = require("webtorrent");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const rangeParser = require("range-parser");

class Torrent {
  constructor(magnetOrBuffer, res) {
    emitter.removeAllListeners();
    this.client = new WebTorrent();
    this.magnetOrBuffer = magnetOrBuffer;
    this.torrent = this.client.add(this.magnetOrBuffer);
    this.listenForError(res);
  }

  listenForError(res) {
    this.client.on("error", (err) => {
      console.log({ err });
      res.status(400).json({ error: err.message });
    });
  }

  getTorrentFiles(res) {
    let data = {};
    return this.client.on("torrent", () => {
      data.name = this.torrent.name;
      data.size = this.torrent.length;
      data.files = [];
      this.torrent.files.map((file) => {
        data.files.push({
          name: file.name,
          size: file.length,
        });
      });
      // this.torrent.destroy();
      // this.client.destroy();

      // console.log(data);
      if (!res.headersSent) res.json({ data });
      // return data;
    });
  }

  stream(index, req, res) {
    if (!this.torrent) {
      return res.status(400).json({ message: "Unable to stream torrent" });
    }
    console.log({ files: this.torrent.files, index });
    let fileSize = this.torrent.files[index].length;
    // Parse the Range header to get the start and end bytes
    const range = rangeParser(fileSize, req.headers.range);
    console.log({ fileSize, header: req.headers.range, range });
    let readStream;

    if (range) {
      // Set the Content-Range and Content-Length headers
      res.set("Content-Range", `bytes ${range.start}-${range.end}/${fileSize}`);
      res.set("Content-Length", range.end - range.start + 1);

      // Create a read stream for the file and pipe it directly to the response
      readStream = this.torrent.files[index].createReadStream({
        start: range.start,
        end: range.end,
      });
    } else {
      // The Range header is not present, so send the entire file
      res.set("Content-Length", fileSize);
      readStream = this.torrent.files[index].createReadStream();
    }
    readStream.pipe(res);

    readStream.on("end", () => {
      console.log("second stream end");
    });
  }
}

module.exports = Torrent;
