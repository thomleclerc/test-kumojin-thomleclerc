import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <h1 className="header -md-margin-bottom">Kumojin - Thomas Leclerc</h1>

      {/* Improvement : The following code should be another component to facilitate reading. The page component tend to have a lot of content, but in this case, it'll be decent size. */}
      <div className="">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default HomePage;
