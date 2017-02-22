import React, {Component} from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook'

import '../App.css'

import jQuery from "jquery"
window.$ = window.jQuery = jQuery
import FullCalendar from "fullcalendar"
import '../../node_modules/fullcalendar/dist/fullcalendar.min.css'

import FullCalendarComponent from '../components/FullCalendar'

const events = [
  {
    title: 'Event 1',
    date: Date.now()
  }
]

class FullCalendarStory extends Component {
  handleClick = () => {
    this.props.onSaveEvents(this.calendar.state.events)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>Full Calendar (Jquery)</h3>
            <a href="https://github.com/fullcalendar/fullcalendar" target="_blank">github</a>
            <br/>  
            <button onClick={this.handleClick}>Get events from component's state</button>
            <br/><br/><br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FullCalendarComponent events={events} ref={node => this.calendar = node} />
          </div>
        </div>      
      </div>
    )    
  }
}
storiesOf('Calendar', module)
  .add('Full Calendar', () => {
    return (
      <FullCalendarStory onSaveEvents={action('on save event')}/>
    )
  })