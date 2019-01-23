import React from 'react';
import SvgContainer from './SvgContainer/SvgContainer';

// import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import DataPanelContainer from './DataPanel/DataPanelContainer';

class MapView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
    // style={{ float: 'left'}}>
    <div>
              <SvgContainer activecountrydata={this.props.activecountrydata}/>
            </div>
        );
}
}

    
 
export default MapView;
