import React from 'react';

 import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import DataPanelContainer from './DataPanel/DataPanelContainer';

class SuperStructureContainer extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
             apiData: ''
         };
     }

    //methods
    runner = (delivery) => {
        this.setState({
            apiData: delivery
        });
    }
    
    render() {

return (
            <div>
              <SuperStructureView activecountrydata={this.state.apiData} runner={this.runner}/>
            </div>
        );
}
}

    


        



export default SuperStructureContainer;

    
    
