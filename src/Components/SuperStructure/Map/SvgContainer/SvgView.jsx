import React from 'react';
import GroupContainer from './Group/GroupContainer';
const SvgData = require('./assets/world.min.json');

// import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import DataPanelContainer from './DataPanel/DataPanelContainer';

class SvgLoader extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
    <svg
       xmnlns={SvgData.attributes.xmlns}
      version={SvgData.attributes.version}
      id={this.props.id ? }
      strokeLinejoin={this.props.StrokeLinejoin ? this.props.StrokeLinejoin : ((SvgData.attributes['stroke-line-join']) ? SvgData.attributes['stroke-line-join'] : null)}
      height={this.props.height ? this.props.height : ((SvgData.attributes.height) ? SvgData.attributes.height : null)}
      width={this.props.width ? this.props.width : ((SvgData.attributes.width) ? SvgData.attributes.width : null)}
      
      
    >
              
              <GroupContainer/>
            </svg>
        );
}
}

export default SvgLoader;
