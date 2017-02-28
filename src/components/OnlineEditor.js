import React, {Component} from 'react'

class OnlineEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transMatrix: [1,0,0,1,0,0],
      mapMatrix: null,
      width: null,
      height: null,
      button: {
        currentX: 0,
        currentY: 0,
        currentMatrix: 0,
        mouseDown: false
      }
    }
  }

  componentDidMount () {
    const width  = this.svgDoc.getAttributeNS(null, "width");
    const height = this.svgDoc.getAttributeNS(null, "height");
    this.setState({
      width, height
    })
  }

  pan = (dx, dy) => {
    let {transMatrix} = this.state
    transMatrix[4] += dx;
    transMatrix[5] += dy;
              
    const newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
    this.mapMatrix.setAttributeNS(null, "transform", newMatrix);
    
    this.deselectElement()
  }

  zoomOut = () => {
    this.zoom(0.8)
  }

  zoomIn = () => {
    this.zoom(1.25)
  }

  zoom = (scale) => {
    let {transMatrix, width, height} = this.state
    for (var i=0; i<transMatrix.length; i++)
    {
      transMatrix[i] *= scale;
    }

    transMatrix[4] += (1-scale)*width/2;
    transMatrix[5] += (1-scale)*height/2;
              
    const newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
    this.mapMatrix.setAttributeNS(null, "transform", newMatrix);

    this.setState({
      transMatrix
    })

    this.deselectElement()
  }  

  selectElement = (e) => {    
    let selectedElement = e.nativeEvent.target;    
    const currentX = e.clientX;
    const currentY = e.clientY;
    let currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
    const mouseDown = true

    for (let i = 0; i < currentMatrix.length; i++) {
      currentMatrix[i] = parseFloat(currentMatrix[i]);
    }

    this.setState({
      button: {
        currentX, currentY, currentMatrix, mouseDown
      }
    })
  }

  moveElement = (e) => {
    let {currentX, currentY, currentMatrix, mouseDown} = this.state.button
    if (!mouseDown) {
      return
    }
    let selectedElement = e.nativeEvent.target;
    const dx = e.clientX - currentX;
    const dy = e.clientY - currentY;
    currentMatrix[4] += dx;
    currentMatrix[5] += dy;
    const newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
              
    selectedElement.setAttributeNS(null, "transform", newMatrix);
    currentX = e.clientX;
    currentY = e.clientY;

    this.setState({
      button: {currentX, currentY, currentMatrix, mouseDown}
    })
  }

  deselectElement = () => {
    this.setState({
      button: {
        mouseDown: false
      }
    })
  }

  render () {
    return (
      <div>
        <svg>
          <circle cx="50" cy="50" r="42" fill="white" opacity="0.75"/>
          <path className="button" onClick={() => {this.pan( 0, 50)}} d="M50 10 l12   20 a40, 70 0 0,0 -24,  0z" />
          <path className="button" onClick={() => {this.pan( 50, 0)}} d="M10 50 l20  -12 a70, 40 0 0,0   0, 24z" />
          <path className="button" onClick={() => {this.pan( 0, -50)}} d="M50 90 l12  -20 a40, 70 0 0,1 -24,  0z" />
          <path className="button" onClick={() => {this.pan( -50, 0)}} d="M90 50 l-20 -12 a70, 40 0 0,1   0, 24z" />
          
          <circle className="compass" cx="50" cy="50" r="20"/>
          <circle className="button"  cx="50" cy="41" r="8" onClick={this.zoomOut}/>
          <circle className="button"  cx="50" cy="59" r="8" onClick={this.zoomIn} />

          <rect className="plus-minus" x="46" y="39.5" width="8" height="3"/>
          <rect className="plus-minus" x="46" y="57.5" width="8" height="3"/>
          <rect className="plus-minus" x="48.5" y="55" width="3" height="8"/>                  
        </svg>
        <svg width="400" height="400" ref={node => this.svgDoc = node}>
          <rect x="0" y="0" width="400" height="400" stroke="grey" strokeWidth="1" fillOpacity={0}/>
          <g id="map-matrix" transform="matrix(1 0 0 1 0 0)" ref={node => this.mapMatrix = node}>            
            <text className="draggable" x="100" y="15" fill="red">lorem ipsum</text>
            <rect className="draggable"
              x="100" y="50"
              width="80" height="80"
              fill="blue" 
              transform="matrix(1 0 0 1 0 0)"
              onMouseDown={this.selectElement}
              onMouseMove={this.moveElement}
              onMouseUp={this.deselectElement}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default OnlineEditor