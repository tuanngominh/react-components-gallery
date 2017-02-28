import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import OnlineEditor2 from '../components/OnlineEditor2'

storiesOf('OnlineEditor2', module)
  .add('', () => {
    return (
      <OnlineEditor2 />
    )
  })