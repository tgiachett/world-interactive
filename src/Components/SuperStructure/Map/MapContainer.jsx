import React from 'react';

import MapView from './MapView';

class MapContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
            <div>
              {/* <DataPanelContainer/> */}
              <MapView activecountrydata={this.props.activecountrydata} />
            </div>
        );
}
}

    
 
export default MapContainer;
