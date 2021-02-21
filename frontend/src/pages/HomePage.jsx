import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useFetch } from "../hooks";
import { serverTimezoneUrl } from "../common/constants";
import {
  getBrowserTimezone,
  getDateTimeFromTimezone,
} from "../helpers/momentHelpers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spinnerRoot: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0px 0px -50px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function HomePage({ isLoading = false }) {
  const classes = useStyles();
  const [localDateTime, setLocalDateTime] = useState("");
  const [serverDateTime, setServerDateTime] = useState("");

  const [tokyoTimezone, , isLoadingTimezone = false] = useFetch(
    axios.get,
    serverTimezoneUrl
  );

  useEffect(() => {
    setLocalDateTime(getDateTimeFromTimezone(getBrowserTimezone()));
  }, []);

  useEffect(() => {
    if (tokyoTimezone?.timezone)
      setServerDateTime(getDateTimeFromTimezone(tokyoTimezone.timezone));
  }, [tokyoTimezone]);

  useEffect(() => {
    let interval;
    if (localDateTime && serverDateTime && tokyoTimezone?.timezone)
      interval = setInterval(() => {
        setLocalDateTime(getDateTimeFromTimezone(getBrowserTimezone()));
        setServerDateTime(getDateTimeFromTimezone(tokyoTimezone?.timezone));
      }, [1000]);
    return () => clearInterval(interval);
  }, [serverDateTime, localDateTime, tokyoTimezone]);

  return (
    <>
      {(isLoadingTimezone || isLoading) && (
        <div className={classes.spinnerRoot} data-testid="spinner">
          <CircularProgress />
        </div>
      )}

      <Container maxWidth="sm">
        <h1 className="header -md-margin-bottom">
          <a href="https://kumojin.com/">Kumojin</a> - Thomas Leclerc -
          20/02/2021
        </h1>

        {/* Improvement : The following code should be another component to facilitate reading. The pages components tend to have a lot of content, but in this particular case, it'll still be decent size. */}
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} data-testid="instructions-container">
              <Paper className={classes.paper}>
                <h3>Instructions</h3>
                <span style={{ fontWeight: "bold" }}>Backend</span>
                <ul style={{ textAlign: "left" }}>
                  <li>Retourner le timezone de Tokyo à l'aide d'un endpoint</li>
                  <li>Écrire des tests unitaires</li>
                  <li>Technos utilisées : NodeJs et Express</li>
                  <li>Dockerfile</li>
                </ul>
                <span style={{ fontWeight: "bold" }}>Frontend</span>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    Afficher l'heure du timezone retourner par le serveur ainsi
                    que le timezone du browser
                  </li>
                  <li>Écrire des tests unitaires</li>
                  <li>Technos utilisées : React, moment, SCSS</li>
                  <li>Dockerfile</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4 className="text__spacing">🗻 Heure de Tokyo 🎎</h4>
                <h5 data-testid="server-dateTime">
                  {serverDateTime || "0000-00-00 00:00:00"}
                </h5>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4>🌎 Heure Local 🌍</h4>
                <h5 data-testid="local-dateTime">
                  {localDateTime || "0000-00-00 00:00:00"}
                </h5>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
