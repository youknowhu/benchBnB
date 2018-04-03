import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager'
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    console.log(this.props.benches)

    this.MarkerManager.updateMarkers(this.props.benches);

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default withRouter(BenchMap);
