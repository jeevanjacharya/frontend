import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './styles/index.css'
import SignIn from '../LoginComponent/index'
import SignUp from '../SignUpComponent/index'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function Header(props) {
  const history = useHistory();
  const [loginFlag, setLoginFlag] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpen = () => {
    setOpenLogin(true);
    history.push('/signin')
  };
  const handleClickClose = () => {
    setOpenLogin(false);
    setLoginFlag(false);
    history.push('/')
  };

  const handleLogin= () => {
    setLoginFlag(!loginFlag)
    if(loginFlag===false) {
    history.push('/signup')
    }else {
      history.push('/signin')
    }

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
  return (
    <div className='header-bar'>
      {/* <div className='header-logo' /> */}
      <div className='header-text-div'>
        <p className='header-text'>{props.name}</p>
      </div>
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
    </div>
  );
}

