import { TextField } from '@material-ui/core'
import React from 'react'
import './styles/index.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '55ch',
    },
  },
}));

export default function StudentProfile() {
  const classes = useStyles();
  return (
    <div className='profile-container-div'>
      <div className='profile-container'>
        <p className='profile-header'>PROFILE</p>
        <div className='profile-div'>
        <form className={classes.root} noValidate autoComplete="off">
          <div className='profile-sub-part'>
          <TextField id="standard-basic" label="First Name" className='textfield' disabled defaultValue ='Pranav P Patil'/>
          </div>

          <div className='profile-sub-part'>
          <TextField id="standard-basic" label="Registered Mobile Number" className='textfield' disabled value='+91 9481394310'/>
          </div>
          <div className='profile-sub-part'>
          <TextField id="standard-basic" label="Registered Email ID" className='textfield' disabled  value='pranavppatil08@gmail.com'/>
          </div>
          <div className='profile-sub-part'>
          <TextField id="standard-basic" label="Date Of Birth" className='textfield' disabled value='30-05-2000'/>
          </div>
          </form>
        </div>

        
      </div>
    </div>
  )
}
