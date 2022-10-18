import React from 'react';
import {
  AppBar,
  Avatar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import DarkModeToggle from 'react-dark-mode-toggle';
import './Header.css';

const useStyles = makeStyles({
  darkMode: {
    backgroundColor: '#2C333A',
  },
  lightMode: {
    backgroundColor: '#25282E',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  appbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '30px',
    marginRight: '15px',
  },
});

function Header({ darkState, toggleDarkMode }) {
  const styles = useStyles();
  return (
    <AppBar
      position="static"
      className={`${darkState ? styles.darkMode : styles.lightMode} ${
        styles.appbar
      }`}
    >
      <Toolbar className={styles.toolbar}>
        <div className="header">
          <div className="header__logo">
            <Avatar src="/images/logo.png" className={styles.logo} />
            <Typography variant="h6">RohanShah</Typography>
          </div>
          <DarkModeToggle
            onChange={() => toggleDarkMode()}
            checked={darkState}
            size={55}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
