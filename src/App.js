import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamRiMDAiLCJhIjoiY2tlZHl1cDQwMDV1czJydXF4YjF3Y2IwciJ9.aIsmt7Dfzr-akpBT26tZvg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    }
  }

  componentDidMount() {
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/jdb00/ckeesriz609us19peozh4scm6',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      var a = this.state
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
      console.log(a.lat,a.lng,a.zoom)
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div className="sidebarStyle">
              <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
            <div className="mapBox" ref={el => this.mapContainer = el} />
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
