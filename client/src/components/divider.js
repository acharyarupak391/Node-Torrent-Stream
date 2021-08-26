import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px auto",
  },
  line: {
    flex: "1",
    height: 1,
    background: "grey",
  },
  text: {
    fontSize: 15,
    margin: "auto 5px",
    lineHeight: 1.5
  },
}));

const Divider = ({ text }) => {
  const c = useStyles();

  return (
    <div className={c.container}>
      <div className={c.line}></div>
      {text && (
        <>
          <Typography
            variant="caption"
            color="textSecondary"
            className={c.text}
          >
            {text}
          </Typography>
          <div className={c.line}></div>
        </>
      )}
    </div>
  );
};

export default Divider;
