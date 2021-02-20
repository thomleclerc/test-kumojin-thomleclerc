import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

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
    backgroundColor: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function HomePage() {
  const classes = useStyles();
  const [localDateTime, setLocalDateTime] = useState("");
  const [serverDateTime, setServerDateTime] = useState("");

  const [serverTimezone, , isLoading = true] = useFetch(
    axios.get,
    serverTimezoneUrl
  );

  useEffect(() => {
    setLocalDateTime(getDateTimeFromTimezone(getBrowserTimezone()));
  }, []);

  useEffect(() => {
    if (serverTimezone?.timezone)
      setServerDateTime(getDateTimeFromTimezone(serverTimezone.timezone));
  }, [serverTimezone]);

  useEffect(() => {
    let interval;
    if (localDateTime && serverDateTime && serverTimezone?.timezone)
      interval = setInterval(() => {
        setLocalDateTime(getDateTimeFromTimezone(getBrowserTimezone()));
        setServerDateTime(getDateTimeFromTimezone(serverTimezone?.timezone));
      }, [1000]);
    return () => clearInterval(interval);
  }, [serverDateTime, localDateTime, serverTimezone]);

  return (
    <>
      {isLoading && (
        <div className={classes.spinnerRoot}>
          <CircularProgress />
        </div>
      )}

      <Container maxWidth="sm">
        <h1 className="header -md-margin-bottom">Kumojin - Thomas Leclerc</h1>

        {/* Improvement : The following code should be another component to facilitate reading. The pages components tend to have a lot of content, but in this particular case, it'll still be decent size. */}
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h3>Instructions</h3>
                <p>
                  Backend : <br></br>
                  Frontend : <br></br>
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4>
                  <AccessTimeIcon fontSize="small" /> Heure de Tokyo{" "}
                  <AccessTimeIcon fontSize="small" />
                </h4>
                <h5 id="serverDateTime">
                  {serverDateTime || "0000-00-00 00:00:00"}
                </h5>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4>
                  <AccessTimeIcon fontSize="small" /> Heure Local{" "}
                  <AccessTimeIcon fontSize="small" />
                </h4>
                <h5 id="localDateTime">
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
