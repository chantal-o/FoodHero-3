import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

render() {


    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }

  export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapContainer);
