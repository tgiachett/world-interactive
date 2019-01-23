import React from 'react';
import SvgLoader from './SvgLoader';

// import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import DataPanelContainer from './DataPanel/DataPanelContainer';

class SvgContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
            <div>
              
              <SvgLoader
                activecountrydata={this.props.activecountrydata}
                viewBox={'0 0 2000 1001'}
                height={500}
                width={1000}
              />
            </div>
        );
}
}

export default SvgContainer;
