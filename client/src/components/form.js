import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";
import Divider from "./divider";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  grid: {
    margin: "50px auto",
    padding: 10,
  },
  dividerText: {
    position: "relative",
    "&:before": {},
  },
  border2: {
    borderRadius: 2,
  },
  fileUploadContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  fileName: {
    position: "relative",
    fontSize: 14,
    maxWidth: 300,
    wordBreak: "break-all",
    maxHeight: 75,
    color: "#4f4848",
    marginTop: 10,
    padding: 5,
    border: "1px solid grey",
    borderRadius: 2,
    background: "#ececec",
  },
  clearBtn: {
    position: "absolute",
    top: -10,
    right: -10,
    height: 20,
    width: 20,
    border: "1px solid",
  },
  submitBtn: {
    margin: "15px auto",
    height: 36,
  },
  clearText: {
    marginBottom: 10,
  },
  loader: {
    animationDuration: "750ms",
    marginRight: 10,
    color: "darkslateblue",
  },
  snack: {
    top: 75,
  },
  alert: {
    width: "100%",
    minWidth: 250,
    background: "#f44336",
    color: "white",
    "&>*>svg": {
      color: "white",
    },
  },
}));

const Form = (props) => {
  const c = useStyles();

  const [magnet, setMagnet] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const inputRef = useRef();

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMagnetInput = (e) => {
    setMagnet(e.target.value);
  };

  const handleMagnetClear = () => {
    setMagnet("");
  };

  const handleFileRemove = () => {
    setFile(null);
    inputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
  };

  const makeRequest = async () => {
    setLoading(true);
    const formData = new FormData();
    if (magnet) formData.append("magnet", magnet);
    else if (file) formData.append("file", file);
    let data = {
      magnet: magnet,
    };
    let response;
    try {
      response = await axios.post("http://localhost:3000/torrent", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.setCurrentStep(1, response?.data?.data);
    } catch (err) {
      // console.log("error: ", err?.response?.data?.error);
      setAlert({
        open: true,
        message: err?.response?.data?.error,
      });
    }
    setLoading(false);
  };

  const handleCloseAlert = (_, reason) => {
    if (reason === "clickaway") return;
    setAlert(null);
  };

  const slideUpTransition = (props) => {
    return <Slide {...props} direction="left" />;
  };

  return (
    <Grid xs={10} sm={8} lg={6} className={c.grid}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          label="Magnet or Hash"
          onChange={handleMagnetInput}
          className={c.border2}
          fullWidth
          value={magnet}
          disabled={file}
          InputProps={{
            endAdornment: magnet && (
              <InputAdornment>
                <IconButton
                  className={c.clearText}
                  size="small"
                  onClick={handleMagnetClear}
                >
                  <ClearIcon size="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Divider text="or" />
        <div className={c.fileUploadContainer}>
          <Button
            variant="outlined"
            component="label"
            className={c.border2}
            disabled={magnet}
          >
            Upload .torrent File
            <input
              type="file"
              accept=".torrent"
              onChange={handleFileInput}
              hidden
              ref={inputRef}
            />
          </Button>
          {file && (
            <Typography className={c.fileName}>
              {file.name}{" "}
              <IconButton
                size="small"
                className={c.clearBtn}
                onClick={handleFileRemove}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Typography>
          )}
        </div>
        <br />
        <Divider />
        <Button
          variant="contained"
          color="primary"
          className={`${c.border2} ${c.submitBtn}`}
          disabled={(!file && !magnet) || loading}
          onClick={handleSubmit}
        >
          {loading && (
            <CircularProgress className={c.loader} thickness={4.5} size={20} />
          )}{" "}
          Start Streaming
        </Button>
      </form>
      <Snackbar
        open={alert?.open}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={slideUpTransition}
        autoHideDuration={2500}
        className={c.snack}
      >
        <Alert severity="error" className={c.alert}>
          {alert?.message ?? "Some error occured!"}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Form;
