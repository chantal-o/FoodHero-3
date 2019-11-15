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
        origin: new google.maps.LatLng(43.8507300, -79.6512600),
        destination: new google.maps.LatLng(43.8525800, -79.6514100),
        waypoints: new google.maps.LatLng(43.8525925, -79.6622222),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            // lat: lat,
            // long: lng,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props => 

    // if (navigator.geolocation) {

            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
            // map.setCenter(pos);
        // }, function() {
        //     handleLocationError(true, infoWindow, map.getCenter());
        // });
        // } else {
        // // Browser doesn't support Geolocation
        // handleLocationError(false, infoWindow, map.getCenter());
        // }

    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent(browserHasGeolocation ?
    //                         'Error: The Geolocation service failed.' :
    //                         'Error: Your browser doesn\'t support geolocation.');
    //     infoWindow.open(map);
    

  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(props.pos.coords.latitude,props.pos.coords.longitude)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default MapWithADirectionsRenderer
