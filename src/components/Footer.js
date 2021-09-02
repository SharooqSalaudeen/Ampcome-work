import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import fb from "../assets/images/social-icons/fb.svg";
import twitter from "../assets/images/social-icons/twitter.svg";
import linkedin from "../assets/images/social-icons/linkedin.svg";
import ig from "../assets/images/social-icons/ig.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.sectionBackground}>
      <Container maxWidth="lg">
        <div className={classes.sectionContainer}>
          <Box className={classes.footerSubscribe}>
            <Grid container spacing={2}>
              <Grid item sm={8}>
                <h2>Never miss an update!</h2>
                <div>
                  <p>
                    Subscribe and stay in loop for our latest features and news
                  </p>
                  <p>We promise we won't spam your mailbox</p>
                </div>
              </Grid>
              <Grid item sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Name"
                  type="text"
                  className={classes.userInput}
                  id="Name"
                  placeholder="Name"
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="email"
                  type="email"
                  className={classes.userInput}
                  id="email"
                  placeholder="Email"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.subscribeButton}
                >
                  SUBSCRIBE
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.footerLinks}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <img src="" alt="" />
                <p>
                  MeetMyCoach allows Coaches and Consultants to explore new
                  opportunities, connect with employers and Businesses
                </p>
                <div className={classes.socialIcons}>
                  <img src={fb} alt="" />
                  <img src={ig} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={twitter} alt="" />
                </div>
              </Grid>
              <Grid item sm={3}>
                <ul>
                  <li>Support Center</li>
                  <li>Why MeetMyCoach?</li>
                  <li>Plans &amp; Pricing</li>
                  <li>For Business</li>
                  <li>Resources</li>
                  <li>Use Cases</li>
                  <li>About Us</li>
                </ul>
              </Grid>
              <Grid item sm={3}>
                <ul>
                  <li>Term of Use</li>
                  <li>Privacy Policy</li>
                  <li>Coach Usage Policy</li>
                  <li>Employer job Policy</li>
                  <li>Language Pocliy</li>
                  <li>Contact Us</li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  // Section container----------------------------------------------
  sectionBackground: {
    backgroundColor: "#ff8e31",
    minHeight: "100vh",
  },

  sectionContainer: {
    height: "100%",
  },

  // Subscribe section ----------------------------------------------
  footerSubscribe: {
    padding: "100px 0",
    minHeight: "50vh",
    color: "#ffffff",
  },
  userInput: {
    background: "#ffffff",
    boxShadow: "0px 3px 6px #00000029",
    border: "none",
    borderRadius: "5px",
    margin: "10px 0",
  },
  subscribeButton: {
    background: "#125d8f",
    margin: "10px 0",
  },

  // Links section ----------------------------------------------

  footerLinks: {
    minHeight: "50vh",
    borderRadius: "20px 20px 0px 0px",
    background: "#ffffff",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
    paddingBottom: "auto",

    "& li": {
      listStyle: "none",
      padding: "5px",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "100px",
    maxWidth: "300px",
  },
}));
