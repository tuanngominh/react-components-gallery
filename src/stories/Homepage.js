import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import '../App.css'

import Homepage from '../components/Homepage'
import Navbar from '../components/Homepage/Navbar'
import Hero from '../components/Homepage/Hero'
import Intro1 from '../components/Homepage/Intro1'

storiesOf('Homepage', module)
  .add('Navbar', () => {
    return (
      <Navbar />
    )
  })
  .add('Hero', () => {
    return (
      <Hero />
    )
  })
  .add('Intro1', () => {
    return (
      <Intro1 />
    )
  })  
  .add('Full homepage', () => {
    return (
      <Homepage />
    )
  })