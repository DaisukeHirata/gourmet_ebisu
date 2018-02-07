import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../leaflet'

export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 35.650109,
      lng: 139.712599,
    },
  }

  handleClick = () => {
    this.refs.map.leafletElement.locate()
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>
    ) : null

    //handleClick();

    return (
      <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref="map"
        zoom={16}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    )
  }
}
