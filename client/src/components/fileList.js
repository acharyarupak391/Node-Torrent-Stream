import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ListIcon from "@material-ui/icons/List";
import MovieIcon from "@material-ui/icons/Movie";
import "./style.css"

const useStyles = makeStyles(() => ({
  grid: {
    margin: "50px auto",
    padding: 10,
  },
  typoGrid: {
    display: "flex",
    alignItems: "flex-start",
    padding: 5,
    borderRadius: 2,
  },
  ml10: {
    marginLeft: 10,
  },
  ml5: {
    marginLeft: 5,
  },
  listContainer: {
    margin: "10px 15px",
  },
  fileName: {
    wordBreak: "break-all",
  },
  fileSize: {
    color: "#7b7b7b",
  },
  listItem: {
    "&:hover": {
      background: "#fdf0f0",
      cursor: "pointer",
    },
    "&:active": {
      background: "#f9d5d5",
    },
  },
  title: {
    color: "blueviolet",
    background: "aliceblue",
    padding: 3,
    marginBottom: 5,
  }
}));

const FileList = ({ files, setCurrentStep }) => {
  const c = useStyles();
  const [fileData, setFileData] = useState({});

  function getSize(size) {
    if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1073741824) return `${(size / 1024 / 1024).toFixed(2)} MB`;
    else return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
  }

  function filterData(data) {
    let _data = { name: data?.name, files: [] };
    data?.files?.forEach((file) => {
      _data.files.push({
        name: file.name,
        size: getSize(file.size),
      });
    });
    return _data;
  }

  const isVideo = (fileName) => {
    const formats = ["avi", "flv", "mkv", "mov", "mp4", "webm", "wmv"];
    let _arr = fileName.split(".");
    let ext = _arr[_arr.length - 1];
    if (formats.includes(ext.toLowerCase())) return true;
    return false;
  };

  useEffect(() => {
    if (files && files !== {}) {
      setFileData(filterData(files));
    }
  }, [files]);

  const handleFileClick = (index, file) => {
    setCurrentStep(2, { index, data: file });
  };

  return (
    <Grid xs={10} sm={8} lg={6} className={c.grid}>
      <Typography className={c.title}>Choose a file to stream</Typography>
      <Typography variant="h6" className={`${c.typoGrid} textWrapper`}>
        <ListIcon fontSize="large" />
        <span className={`${c.ml10} textWrap`}>{fileData?.name}</span>
      </Typography>
      <Grid className={c.listContainer}>
        {fileData?.files?.map(
          (file, i) =>
            isVideo(file.name) && (
              <Typography
                variant="subtitle2"
                className={`${c.typoGrid} ${c.listItem} textWrapper`}
                onClick={() => handleFileClick(i, file)}
              >
                <MovieIcon />
                <span className={`${c.ml5} ${c.fileName}`}>{file.name}</span>
                <span className={`${c.ml10} ${c.fileSize}`}>[{file.size}]</span>
              </Typography>
            )
        )}
      </Grid>
    </Grid>
  );
};

export default FileList;
