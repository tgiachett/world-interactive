import React from 'react';
import DataPanelView from './DataPanelView';



// import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import DataPanelContainer from './DataPanel/DataPanelContainer';

class DataPanelContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
            <div>
              <DataPanelView runner={this.props.runner}>
                
              </DataPanelView>
            </div>
        );
}
}

    


        



export default DataPanelContainer;
