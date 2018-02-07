import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../src'

export default class SimpleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 35.650109,
      lng: 139.712599,
      zoom: 16,
    };
  }

  componentDidMount() {
    this.RestaurantGeoJSON();
  }

  RestaurantGeoJSON() {
    fetch('https://4l1yuzvlei.execute-api.ap-northeast-1.amazonaws.com/dev/restaurant-map')
      .then(response => response.json() )
		  .then(data => {
        console.log(data);
			  this.setState({data: data})
		  })      
  }  

  render() {
    const data = this.state.data;
    if (data === undefined) return null;
    const features = data.features;
    const position = [this.state.lat, this.state.lng]
    const markers = features.map((feature, i) =>
      <Marker key={i} position={feature.geometry.coordinates}>
        <Popup>
          <span>
            <a href={feature.properties.url} target="blank">{feature.properties.name}</a> <br />
            {feature.properties.genre} <br />
            <br />
            {feature.properties.message} <br />
            <br />            
            {feature.properties.address} <br />               
          </span>
        </Popup>
      </Marker>
    );   
    
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { markers }
      </Map>
    )
  }
}
