/* global google */
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap,DirectionsRenderer} from "react-google-maps";


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
      let lat = this.props.pos.coords.latitude;
      let lng = this.props.pos.coords.longitude;
      let missiondest = this.props.missions[0].recipientaddress;
      let missiondonor = this.props.missions[0].donoraddress;
      console.log("MISSION", missiondest);
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(lat, lng),
        destination: missiondest,
        // waypoints: new google.maps.LatLng(43.8525925, -79.6622222),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: [
          {
              location: missiondonor,
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
)(props => {
  console.log("PROPS", props);
  let lat = props.pos.coords.latitude;
  let lng = props.pos.coords.longitude;
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={new google.maps.LatLng(lat, lng)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  )
  });

export default MapWithADirectionsRenderer
