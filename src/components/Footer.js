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
              <Grid item xs={12} sm={6} md={8}>
                <h2>Never miss an update!</h2>
                <div>
                  <p>
                    Subscribe and stay in loop for our latest features and news.
                  </p>
                  <p>We promise we won't spam your mailbox.</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
              <Grid item xs={12} md={6}>
                <img
                  className={classes.footerLogo}
                  src="\images\MeetMyCoach Logo.svg"
                  alt="CTA Logo One"
                />
                <p>
                  MeetMyCoach allows Coaches and Consultants to explore new
                  opportunities, connect with employers and businesses.
                </p>
                <div className={classes.socialIcons}>
                  <img src={fb} alt="facebook" />
                  <img src={ig} alt="instagram" />
                  <img src={linkedin} alt="linkedin" />
                  <img src={twitter} alt="twitter" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
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
              <Grid item xs={6} sm={6} md={3}>
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
            <div className={classes.footerCopyright}>
              <p>© Copyright 2020 MeetMyCoach. All rights reserved</p>
            </div>
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
    padding: "0 10% ",
    [theme.breakpoints.down("sm")]: {
      padding: "0 6px",
    },
  },

  sectionContainer: {
    height: "100%",
  },

  // Subscribe section ----------------------------------------------
  footerSubscribe: {
    minHeight: "50vh",
    padding: "100px 0",
    color: "#ffffff",
    "& h2": {
      fontSize: "50px",
      fontWeight: "bold",
      paddingBottom: "20px",
    },
    "& p": {
      fontSize: "18px",
    },
  },
  userInput: {
    background: "#ffffff",
    boxShadow: "0px 3px 6px #00000029",
    border: "none",
    borderRadius: "5px",
    margin: "10px 0",

    "& input": {
      padding: "14px",
    },
  },
  subscribeButton: {
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: "400",
    background: "#125d8f",
    margin: "10px 0",
    padding: "8px",
    // height: "56px",
  },

  // Links section ----------------------------------------------

  footerLinks: {
    minHeight: "50vh",
    borderRadius: "20px 20px 0px 0px",
    background: "#ffffff",
    padding: "60px 60px 0 60px",

    [theme.breakpoints.down("xs")]: {
      padding: "60px 30px 0 30px",
    },

    "& p": {
      fontSize: "15px",
    },

    "& ul": {
      margin: "0px",
      padding: "0px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0 0 40px",
        // margin: "auto",
        // padding: "auto",
      },
    },
    "& li": {
      listStyle: "none",
      fontSize: "12px",
      padding: " 0 0 10px 0",
    },
  },

  footerLogo: {
    maxWidth: "180",
    paddingBottom: "20px",
  },

  socialIcons: {
    display: "flex",
    padding: "80px 0 20px 0",
    maxWidth: "300px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0 20px 0",

      margin: "auto",
    },
    "& img": {
      maxWidth: "20%",
    },
  },
  footerCopyright: {
    width: "100%",
    padding: "100px 0 30px 0",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "flex-end",
  },
}));
