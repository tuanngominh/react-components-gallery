import React from 'react';
import SvgMap from './SvgMap';

class MyMap extends React.Component {
  render() {
    return (
      <g>
        <circle cx="100" cy="100" r="50" fill="teal" stroke="black"></circle>
        <rect x="100" y="100" height="100" width="100" fill="black" stroke="teal"></rect>
      </g>
    );
  }
}
export default SvgMap(MyMap);