import React, {Component} from 'react'

import MyMap from './OnlineEditor/MyMap'

class OnlineEditor2 extends Component {
  handlePanRight = () => {
    this.myMap.pan(30, 0)
  }

  handlePanLeft = () => {
    this.myMap.pan(-30, 0)
  }

  handleZoomOut = () => {
    this.myMap.zoom(0.8)
  }

  handleZoomIn = () => {
    this.myMap.zoom(1.2)
  }

  render () {
    return (
      <div>
        <button onClick={this.handlePanLeft}>{'<-'}</button><button onClick={this.handlePanRight}>{'->'}</button><br/>
        <button onClick={this.handleZoomOut}>{'-'}</button><button onClick={this.handleZoomIn}>{'+'}</button><br/>
        <MyMap ref={node => this.myMap = node}/>
      </div>
    );
  }
}

export default OnlineEditor2