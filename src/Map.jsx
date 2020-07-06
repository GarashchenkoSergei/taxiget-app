import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZ2FyYXNoY2hlbmtvc2VyZ2VpIiwiYSI6ImNrYzdiNTAxbzB6dWgycW52Mzd1andwaW8ifQ.3TALFYDQEgz2kWmExwDGgQ";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-74.5, 40], 
      zoom: 9,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return(
      <div className="map-wrapper">
        <div data-tesid="map" className="map" ref={this.mapContainer}></div>
      </div>
    ) 
  }
}

export default Map;