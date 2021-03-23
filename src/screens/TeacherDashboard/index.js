import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './styles/index.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import SignIn from '../../components/LoginComponent/index';
import SignUp from '../../components/SignUpComponent/index';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import PollIcon from '@material-ui/icons/Poll';
import { Button } from '@material-ui/core';
import TeacherProfile from './ProfileModal';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    'background': '#F7F7F7 0% 0% no-repeat padding-box',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function TeacherDashboard(props) {

  const [handleProfile, setProfileFlag] = useState(false);
  const history = useHistory();
  const [loginFlag, setLoginFlag] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpen = () => {
    setOpenLogin(true);
  };
  const handleClickClose = () => {
    setOpenLogin(false);
    setLoginFlag(false);
  };

  const handleLogin = () => {
    setLoginFlag(!loginFlag)
  }

  const handleLogout = () => {
    axios.get('/logout')
      .then(function (res) {
        history.push('/')
      })
      .catch(function (err) {
        console.log(err)
      })
  }



  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileURL =  ()=> {
    setProfileFlag(true);
history.push('/teacher/profile')
  }

  const handleHomeURL = ()=> {
    setProfileFlag(false);
    history.push('/teacher/dashboard');
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DASHBOARD
          </Typography>

          <div className='header-login'>
            {
              props.loginFlag ?
                <p className='header-login-text' onClick={handleClickOpen}>LOGIN</p> :
                <p className='header-login-text' onClick={handleLogout}>LOGOUT</p>
            }


            {/**Dailog Box for login and signup */}

            <Dialog open={openLogin} onClose={handleClickClose} >
              <DialogContent>
                {!loginFlag && <SignIn onClickSignUp={handleLogin} />}
                {loginFlag && <SignUp onClickSignIn={handleLogin} />}
              </DialogContent>
            </Dialog>


          </div>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key='Home' onClick={handleHomeURL}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>

          <ListItem button key='Profile' onClick={handleProfileURL}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary='View Profile' />
          </ListItem>

          <ListItem button key='Create Test' onClick={() => { history.push('/studenttest') }}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary='Create Test' />
          </ListItem>

          <ListItem button key='Result'>
            <ListItemIcon><PollIcon /></ListItemIcon>
            <ListItemText primary='View Result' />
          </ListItem>

        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {!handleProfile && <div className='student-dashboard-container'>
          <div className='student-dashboard-header' />
          <div className='student-dashboard-button'>
            <Button type='button' variant='contained' color='secondary' onClick={() => { history.push('/teacher/teachertest') }} className='student-dashboard-button color-button'>Create English Test</Button>
          </div>

        </div>}

        {handleProfile && <TeacherProfile />}
      </main>
    </div>
  );
}
