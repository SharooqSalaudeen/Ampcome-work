import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function HomeSection1() {
  const classes = useStyles();

  //Used to avoid rendering right section when screen width is below medium ('md')
  const theme = useTheme();
  const renderRightSection = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="xl" className={classes.sectionContainer}>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box className={classes.leftSection}>
              <p className={classes.notification}>
                <span>New</span>New feature available for communication with
                coaches
              </p>

              <MainLinks
                title="Find Coaches"
                description="I am looking for somebody to coach me"
                url="#"
              />
              <MainLinks
                title="Find Coaching Jobs"
                description="I am coach and looking for new opportunities"
                url="#"
              />
              <MainLinks
                title="Post a Job"
                description="I am an employer and looking for coach"
                url="#"
              />
            </Box>
          </Grid>
          {renderRightSection ? (
            <Grid item xs={12} md={6}>
              <div className={classes.rightSection}>
                <Grid container spacing={3}>
                  <Grid item sm={4}>
                    <GallaryGrids
                      details={[
                        { img: "grid-img-1.png", title: "relationship" },
                        { img: "grid-img-2.png", title: "cooking" },
                        { img: "grid-img-3.png", title: "buisness" },
                        { img: "grid-img-4.png", title: "sports" },
                      ]}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <GallaryGrids
                      details={[
                        { img: "grid-img-5.png", title: "finance" },
                        { img: "grid-img-6.png", title: "technology" },
                        { img: "grid-img-7.png", title: "fitness" },
                        { img: "grid-img-8.png", title: "art" },
                      ]}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <GallaryGrids
                      details={[
                        { img: "grid-img-9.png", title: "health" },
                        { img: "grid-img-10.png", title: "youth" },
                        { img: "grid-img-11.png", title: "pet care" },
                        { img: "grid-img-12.png", title: "career" },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </Container>
  );
}

function MainLinks({ title, description, url }) {
  const classes = useStyles();

  return (
    <Box component="a" href={url} className={classes.cardContainer}>
      <div className={classes.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src="\images\design/Path 290.svg" alt="" />
    </Box>
  );
}

function GallaryGrids({ details }) {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      {details.map((item, idx) => {
        const { img, title } = item;
        // console.log(img, title);
        return (
          <div key={idx} className={classes.gridImageWrapper}>
            <img src={`/images/grid-images/${img}`} alt={title} />
            <span>{title}</span>
          </div>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  //Section Container Styling ---------------------------------------------

  sectionContainer: {
    padding: "0 10vw",
    background: "#ff8e3133",
    [theme.breakpoints.down("md")]: {
      padding: "0 2vw",
    },
  },
  //Left Section Styling ---------------------------------------------

  leftSection: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "center",
    height: "100%",
    margin: "0 10%",
  },
  notification: {
    paddingBottom: "50px",
    "& span": {
      color: "#ffffff",
      width: "50px",
      height: "20px",
      padding: "0 10px",
      background: "#52d268 0% 0% no-repeat padding-box",
      borderRadius: "3px",
      opacity: "1",
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100px",
    width: "100%",
    background: "white",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "10px",
    opacity: "1",
    textDecoration: "none",
    marginBottom: "40px",
    "& img": {
      position: "relative",
      display: "flex",
      flex: "1",
      alignSelf: "center",
      width: "40px",
      height: "24px",
      background: "transparent",
      paddingRight: "4px",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flex: "5",
    padding: "24px 0 24px 24px",
    marginRight: "6px",

    "& h2": {
      color: "#ff8e31",
    },
    "& p": {
      color: "#000000",
    },
  },

  //Right Section Styling ---------------------------------------------
  rightSection: {
    alignItems: "center",
    marginLeft: "5vw",
  },
  gridContainer: {
    // top: "-10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // margin: "0 12px",
  },
  gridImageWrapper: {
    position: "relative",
    background: "#ffffff",
    display: "flex",
    padding: "7px",
    borderRadius: "15px",
    height: "fit-content",
    width: "fit-content",
    marginBottom: "40px",
    boxShadow: "0px 3px 8px #00000029",
    "& img": {
      height: "auto",
      width: "100%",
      //   minWidth: "100px",
      maxWidth: "180px",
      borderRadius: "10px",
    },
    "& span": {
      position: "absolute",
      left: "0",
      bottom: "0",
      padding: "10px 16px",
      color: "#ffffff",
      fontWeight: "800",
      fontSize: "18px",
      textAlign: "left",
      textTransform: "uppercase",
    },
  },
}));
