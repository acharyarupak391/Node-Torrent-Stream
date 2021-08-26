import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayCircleOutlineOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  torrent: {
    color: "#ca0000"
  },
  headerBack: {
    background: "whitesmoke",
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

const Header = ({ setCurrentStep }) => {
  const classes = useStyles();

  const handleLogoClick = () => {
    setCurrentStep(0)
  }

  return (
    <Grid>
      <Typography variant="h2" className={classes.headerBack} onClick={handleLogoClick}>
        <span className={classes.torrent}>Torrent</span>
        {/* <PlayCircleOutlineOutlined /> */}
        <span className={classes.stream}>Stream</span>
      </Typography>
    </Grid>
  );
};

export default Header;
