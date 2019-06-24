import React from 'react';
import SearchBar from './SearchBar/SearchBar';

class DataPanelView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    //methods

    render() {

return (
            <div style={{height: '20vh', display: 'inline-block' }}>
              <SearchBar style={{display: 'inline-block' }} runner={this.props.runner}/>
            </div>
        );
}
}

    


        



export default DataPanelView;
