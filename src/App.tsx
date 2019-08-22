import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import MenuIcon from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);


const App: React.FC = () => {
    const classes = useStyles();

  return (
    <div className="App">
      <div>Test</div>
        <AppBar><Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {/*<MenuIcon />*/}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Main
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar></AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
