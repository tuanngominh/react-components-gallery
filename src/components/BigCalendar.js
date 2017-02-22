import React, {Component} from 'react'

import BigCalendar from 'react-big-calendar'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import moment from 'moment'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: props.events
    }
  }

  handleSelectSlot = (slotInfo) => {
    this.setState((prevState, props) => {
      return {
        events: [...prevState.events, {
          'start': slotInfo.start,
          'end': slotInfo.end
        }]
      }
    })
  }


  moveEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }

  render(){
    return (
      <DragAndDropCalendar
        selectable
        min={moment('8:00am', 'h:mma').toDate()}
        max={moment('6:00pm', 'h:mma').toDate()}
        events={this.state.events}
        defaultView='week'
        views={['week']}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={this.handleSelectSlot}
        onEventDrop={this.moveEvent}
      />
    )
  }  
}

export default DragDropContext(HTML5Backend)(Dnd)
