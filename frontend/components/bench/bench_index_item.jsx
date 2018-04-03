import React from 'react';

class BenchIndexItem extends React.Component {

  render()  {
    return (
      <li>
        <p>{this.props.bench.description}</p>
        <span>Lat: {this.props.bench.lat}
        Long: {this.props.bench.lng} </span>
      </li>
    )
  }
}

export default BenchIndexItem
