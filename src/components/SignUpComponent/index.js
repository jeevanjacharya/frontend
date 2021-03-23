import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();


  const history = useHistory();

  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [mobnumber, setMobileNumber] = useState('');
  const [DOB, setDOB] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const [loginFlag, setLogin] = useState(true);


  const handleSubmit = () => {
    axios.post('/signup', { firstName: fname, lastName: lname, email: emailId, password: password })
      .then(function (res) {
        console.log(res.data.signup)

        if (res.data.signup === true) {
          let path = `/`;
          history.push(path);
          alert('Please login to continue')
        } else {
          setLogin(false)
        }
      })
      .catch(function (err) {
        setLogin(false)
      })
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={fname}
                onChange={(e) => { setFirstName(e.target.value) }}
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
                autoComplete="lname"
                value={lname}
                onChange={(e) => { setLastName(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="mobilenumber"
                label="Mobile Number"
                name="mobilenumber"
                autoComplete="mobno"
                value={mobnumber}
                onChange={(e) => { setMobileNumber(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="date"
                id="Dateofbirth"
                label="Date of Birth"
                name="dateofbirth"
                autoComplete="dob"
                value={DOB}
                onChange={(e) => { setDOB(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={emailId}
                onChange={(e) => { setEmailId(e.target.value) }}
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </Grid>

          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
          >
            Sign Up
          </Button>

          {!loginFlag
            && <p className='signin-incorrect-password'>
            EMAIL ID IS ALREADY REGISTERED PLEASE LOGIN TO CONTINUE
        </p>}

          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={props.onClickSignIn} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}