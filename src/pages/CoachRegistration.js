import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

export default function CoachRegistration() {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <Box className={classes.gradientContent}>
        <Container maxWidth="xl">
          <Grid container justifyContent="center" spacing={0}>
            <Grid item xs={10}>
              <div>
                <Typography variant="h2" className={classes.headerTitle}>
                  Welcome!
                </Typography>
                <Typography variant="h4" className={classes.headerSubtitle}>
                  Start your journey with MeetMyCoach
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Grid container justifyContent="flex-end" spacing={0}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Section />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function Section() {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="sm">
      <Box mt={4} mb={4}>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="#" variant="body1" className={classes.signInLink}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
        <Box mt={3} className={classes.paperLayout}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create your account
            </Typography>

            <form className={classes.form} noValidate>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    className={classes.userInput}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    className={classes.userInput}
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    className={classes.userInput}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    className={classes.userInput}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="repeat-password"
                    label="Repeat Password"
                    type="password"
                    className={classes.userInput}
                    id="repeat-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Create
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I agree to the terms & conditions"
                  />
                </Grid>
              </Grid>
            </form>
          </div>

          <Divider />
          <Box mt={5} align="center">
            <Typography variant="body2" color="initial">
              Or Sign Up With
            </Typography>
          </Box>

          <Box pt={3} ml={6} mr={6}>
            <Grid container justifyContent="center" align="center" spacing={0}>
              <Grid item xs={3}>
                <img
                  src="/images/sign-up/facebook.svg"
                  alt="signup with facebook"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="/images/sign-up/google.svg"
                  alt="signup with google"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="/images/sign-up/linkedin.svg"
                  alt="signup with linkedin"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="/images/sign-up/twitter.svg"
                  alt="signup with twitter"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

//---------------------Styles----------------------------------

const useStyles = makeStyles((theme) => ({
  section: {
    position: "absolute",
  },
  paperLayout: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0px 3px 6px #00000029",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.4, 0),
  },
  userInput: {
    backgroundColor: "#F1F3F6",
  },
  signInLink: {
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      color: "#000000",
    },
  },
  gradientContent: {
    position: "absolute",
    width: "100%",
    height: "auto",
    color: "#ffffff",
    zIndex: "-1",
    background:
      "linear-gradient(90deg, hsla(34, 100%, 81%, 1) 0%, hsla(3, 100%, 81%, 1) 100%)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
    },
  },
  headerTitle: {
    padding: "100px 0 30px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 10px",
    },
  },
  headerSubtitle: {
    paddingBottom: "50px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
}));
