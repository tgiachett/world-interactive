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
            <div>
              <SearchBar runner={this.props.runner}/>
            </div>
        );
}
}

    


        



export default DataPanelView;
