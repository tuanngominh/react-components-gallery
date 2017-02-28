import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import OnlineEditor from '../components/OnlineEditor'

storiesOf('OnlineEditor', module)
  .add('', () => {
    return (
      <OnlineEditor />
    )
  })