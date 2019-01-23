import React from 'react';
import PathView from './PathView';


class PathContainer extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
             element: {
             isColor: this.props.pfill,
             isHighlighted: false
             }
         };
     }

    //methods
    componentDidUpdate(prevProps, prevState) {
      

        if (this.props.activecountrydata !== prevProps.activecountrydata) {
             
            this.setState({
                element: {
                    isHighlighted: false,
                    isColor: this.props.pfill
                }
            });
            if(this.props.activecountrydata !== '') {       
                 let countryApiArray = this.props.activecountrydata.map(a => a.alpha2Code);
           
                 if ((countryApiArray.indexOf(this.props.dataname) !== -1)) {
                 this.setState({
                     element: {
                         isHighlighted: true,
                         isColor: '#ffa500'
                     }
                   });
                 }
            }
        }
    } 
           
        
    

    
    render() {

return (

    <PathView
      stroke={this.props.stroke}
      fill={this.state.element.isColor}
      id={this.props.id}
      d={this.props.d}
      runner={this.props.runner ? this.props.runner : undefined}
      activecountrydata={this.props.activecountrydata}
    >
     
    
      
     </PathView>
        );
}
}

export default PathContainer;
