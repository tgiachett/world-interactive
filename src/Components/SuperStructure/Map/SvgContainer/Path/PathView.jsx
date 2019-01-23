import React from 'react';


class PathView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (

    <path
      stroke={this.props.stroke}
      fill={this.props.fill}
      id={this.props.id}
      d={this.props.d}
      activecountrydata={this.props.activecountrydata}
      
       /* runner={this.props.runner ? this.props.runner : false} */
    >
      
    
      
            </path>
        );
}
}

export default PathView;
