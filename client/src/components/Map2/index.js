/* global google */
import React from "react";
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"


const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHM725rC35xGA7_J0ghlldvW5__yMsA3c&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(43.6629,-79.3957),
        destination: new google.maps.LatLng(43.6587, -79.4007),
        // waypoints: new google.maps.LatLng(43.8525925, -79.6622222),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: [
            {
               location: new google.maps.LatLng(43.6622, -79.3803),
        }
       ],
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          console.log(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>

  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(props.pos.coords.latitude,props.pos.coords.longitude)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default MapWithADirectionsRenderer
