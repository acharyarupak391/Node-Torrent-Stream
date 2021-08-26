import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayCircleFilledOutlined } from "@material-ui/icons";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles(() => ({
  grid: {
    margin: "50px auto",
    padding: "15px 10px",
    background: "#8b000036",
    borderRadius: 2,
  },
  playIcon: {
    marginRight: 10,
  },
  typoGrid: {
    display: "flex",
    alignItems: "center",
    margin: "15px 2.5%",
    flexWrap: "wrap",
  },
  ml10: {
    marginLeft: 10,
  },
  ml30: {
    marginLeft: 30,
  },
  fileName: {
    wordBreak: "break-all",
  },
  fileSize: {
    color: "#7b7b7b",
  },
  btn: {
    marginLeft: "auto",
    marginTop: 5,
  },
}));

const VideoPlayer = ({ video }) => {
  const c = useStyles();
  const [url] = React.useState(
    video &&
      (process?.env?.NODE_ENV === "development"
        ? `http://localhost:3000/stream?index=${video?.index}`
        : `/stream?index=${video?.index}`)
  );

  function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }

  const handleDownloadClick = (fileName) => {
    download(url, fileName);
  };

  return (
    <Grid xs={10} sm={8} lg={6} className={c.grid}>
      {parseInt(video?.index) !== NaN && (
        <video id="videoPlayer" controls style={{ width: "95%" }}>
          <source
            src={url}
            type="video/mp4"
          />
        </video>
      )}
      <Typography className={c.typoGrid}>
        <PlayCircleFilledOutlined size="small" className={c.playIcon} />
        <span>Now Playing:</span>
      </Typography>
      <Typography variant="body2" className={`${c.ml30} ${c.typoGrid}`}>
        <span className={`${c.fileName}`}>{video?.data?.name}</span>
        <span className={`${c.ml10} ${c.fileSize}`}>[{video?.data?.size}]</span>
        <Button
          className={c.btn}
          size="small"
          startIcon={<CloudDownloadIcon />}
          variant="outlined"
          onClick={() => handleDownloadClick(video?.data?.name)}
        >
          Download
        </Button>
      </Typography>
    </Grid>
  );
};

export default VideoPlayer;
