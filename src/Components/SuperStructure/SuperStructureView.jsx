import React from 'react';
import DataPanelContainer from './DataPanel/DataPanelContainer';
import MapContainer from './Map/MapContainer';

class SuperStructureView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
              <DataPanelContainer runner={this.props.runner} style={{width: '20vh'}}/>
      <MapContainer activecountrydata={this.props.activecountrydata} style={{width: '80vh'}} />
            </div>
        );
}
}

    
 
export default SuperStructureView;
