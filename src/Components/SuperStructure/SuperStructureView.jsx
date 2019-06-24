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
            <div>
              <DataPanelContainer runner={this.props.runner}/>
              <MapContainer activecountrydata={this.props.activecountrydata} />
            </div>
        );
    }
}

    
 
export default SuperStructureView;
