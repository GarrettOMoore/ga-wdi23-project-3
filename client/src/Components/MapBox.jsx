import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";


class MapBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 47.59809,
            lon: -122.33097
        }
    }
    render() {
        const Map = new ReactMapboxGl({
            accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
            center: [ this.state.lon, this.state.lat],
        });
        return (
            <>
            <h1>MAP</h1>
            <Map
              style='mapbox://styles/garrettmoore/cjtou2gc86i4l1fnhxx633gtf'
              zoom={[10]}
              center={[this.state.lon, this.state.lat]}
              containerStyle={{height: "40em"}}>
              <Marker
                  coordinates={[this.state.lon, this.state.lat]}
                  anchor="bottom">
                  <img src={'https://www.shareicon.net/download/2015/12/05/682942_map.svg'} width="42px" height="42px"/>
              </Marker>
           </Map>
          </>
        )
    }
}

export default MapBox;