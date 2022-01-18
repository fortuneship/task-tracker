import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#e3f2fd'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.secondary.light,
    fontWeight: 'bold',
  },
}));

const Header = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Typography variant="h6" className={classes.title}>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.defaultProps = {
  text: 'Task Tracker',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header;
