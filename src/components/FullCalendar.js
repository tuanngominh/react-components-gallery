import React, {Component} from 'react'

class FullCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: props.events ? props.events : []
    }
  }

  shouldComponentUpdate () {
    //don't touch dom, leave it to jquery
    return false
  }

  componentDidMount() {
    $(this.calendarNode).fullCalendar({
      defaultView: 'agendaWeek',
      allDaySlot: false,
      minTime: '08:00:00',
      maxTime: '18:00:00',
      selectable: true,
      editable: true,
      events: this.props.events,
      height: 'auto',
      select: (start, end) => {
        var eventData;
        eventData = {
          title: '',
          start: start,
          end: end
        }
        $(this.calendarNode).fullCalendar('renderEvent', eventData, true) // stick? = true
        $(this.calendarNode).fullCalendar('unselect')
        this.setState((prevState) => {
          return {
            events: [...prevState.events, eventData]
          }
        })
      },
    })
  }

  componentWillUnmount() {
    $(this.calendarNode).fullCalendar('destroy')
  }

  render(){
    return(
      <div ref={node => this.calendarNode = node} id="calendar"></div>
    )
  }
}

export default FullCalendar