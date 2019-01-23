import React from 'react';
import PathContainer from './Path/PathContainer';
const svgData = require('./assets/world.min.json');

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
       
// I am in the process of trying 
return (
    <svg
      xmnlns={svgData.attributes.xmlns}
      version={svgData.attributes.version}
      id={this.props.id }
      height={this.props.height ? this.props.height : ((svgData.attributes.height) ? svgData.attributes.height : undefined)}
      width={this.props.width ? this.props.width : ((svgData.attributes.width) ? svgData.attributes.width : undefined)}
      strokeLinejoin={this.props.StrokeLinejoin ? this.props.StrokeLinejoin : ((svgData.attributes['stroke-line-join']) ? svgData.attributes['stroke-line-join'] : undefined)}
      stroke={this.props.stroke ? this.props.stroke : ((svgData.attributes.stroke) ? svgData.attributes.stroke : undefined)}
      fill={this.props.fill ? this.props.fill : ((svgData.attributes.fill) ? svgData.attributes.fill : undefined)}
      viewBox={this.props.viewBox ? this.props.viewBox : (svgData.attributes.viewBox ? svgData.attributes.viewBox : undefined)}
    >
      {/* filter */}
    {svgData.children.map((p, i) => {
        const countryCode = p.attributes['data-id'];
        return (
        <PathContainer
        svgelementtype={p.name}
        nodeType={p.type}
        pfill={p.attributes.fill}
        stroke={p.attributes.stroke ? p.atttributes.stroke : undefined}
	key={i}
	id={p.attributes.id}
        dataname={countryCode}
        d={p.attributes.d}
        runner={this.props.runner ? this.props.runner : undefined}
        activecountrydata={this.props.activecountrydata}
          
          
         
        />
        );
    })}
      
            </svg>
        );
}
}

export default SvgLoader;
//apiCountryArray[countryName] !== -1
//fill={(!apiCountryArray) ? '#ffa500' : (p.attributes.fill ? p.attributes.fill : undefined)}
//p.attributes.fill ? p.attributes.fill : undefined
//(apiCountryArray === undefined) ? p.attributes.fill : ((apiCountryArray[countryName] !== -1) ? '#ffa500' : (p.attributes.fill ? p.attributes.fill : undefined))


