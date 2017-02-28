import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook'

import '../App.css'

import ReactDropzone from '../components/ReactDropzone'

storiesOf('Drag and drop', module)
  .add('React Dropzone', () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>react-dropzone</h1>
            <a href="https://github.com/okonet/react-dropzone">github</a>
            <br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ReactDropzone />
          </div>
        </div>      
      </div>
    )
  })