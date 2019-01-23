import React from 'react';

// import SuperStructureView from './SuperStructureView';
// import MapContainer from './Map/MapContainer';
// import SearchBar from './DataPanel/SearchBar';

class SearchBar extends React.Component {

     constructor(props) {
        super(props);
         this.state = {
             inputValue: "https://restcountries.eu/rest/v2/name/Italy",
             dataRes: [],
             error: ''
         };
     }

    //methods
// fetch(`${this.state.inputValue}?fields=name`)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     const data = JSON.stringify(result);
//                     this.props.runner(data);
//                     this.setState({
//                         dataRes: data
//                     });
//                     console.log(data);
//                 },
//                 (error) => {
//                     const err = JSON.stringify(error);
//                     this.setState({
//                         err
//                     });
//                     console.log(this.state.err);
//                 }
//             );

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        });
        
        
        //fetch
                        
    }

    handleSubmit = (e) => {
        this.props.runner('');
        e.preventDefault();
        
        fetch(`${this.state.inputValue}?fields=alpha2Code`)
            .then(res => res.json())
            .then(
                (result) => {
                    
                    const data = result;
                    this.props.runner(data);
                    this.setState({
                        dataRes: data
                    });
                    
                },
                (error) => {
                    const err = JSON.stringify(error);
                    this.setState({
                        err
                    });
                    
                }
            );
        
    } 
    
    render() {

return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Query: 
                  <input type="text" size={60} value={this.state.inputValue} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
              </form>
              <div id="results">
                {this.state.dataRes.name}
              </div>
            </div>
        );
}
}

    


        



export default SearchBar;
