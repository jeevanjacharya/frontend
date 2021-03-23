import React from 'react'
import Header from '../../../components/Header/index'
import '../styles/index.css'
import Divider from '@material-ui/core/Divider';
import { Button, TextareaAutosize } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
export default function TakeTest() {
  return (
    <div>
      <Header name='TAKE TEST'/>
      <div className='test-area-div'>
          <div className='text-area-question-div'>
<p className='text-area-heading'>QUESTION</p>
<p className='text-area-body'>Write a short essay on "The future of engineering: How do we attract young recruits for future human resources in the engineering sector?"</p>
          </div>
          <Divider/>
          <div className='test-area-answer-div'>
                <TextareaAutosize rowsMax={30} rowsMin={30} placeholder='All the Best!' className='text-area-answer-box'></TextareaAutosize>
          </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className='submit-button'
        startIcon={<CloudUpload />}
      >SUBMIT</Button>
    </div>
  )
}
