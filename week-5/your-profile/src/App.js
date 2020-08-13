import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const useStyles = makeStyles({
    root: {
      color: 'blue',
    },
  });
  const outerDiv = {
    width: '100vw',
    height: '100vh',
  };
  const classes = useStyles();
  return (
    <Grid
      style={outerDiv}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Button variant="contained" className={classes.root}>
          Hello
        </Button>
        <Card>
          <CardContent>
            <Typography color="textPrimary">Word of the Day</Typography>
            <Typography variant="h5" component="h2">
              Procrastination
            </Typography>
            <Typography color="textSecondary">adjective</Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Typography color="textPrimary">Word of the Day</Typography>
            <Typography variant="h5" component="h2">
              Procrastination
            </Typography>
            <Typography color="textSecondary">adjective</Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
