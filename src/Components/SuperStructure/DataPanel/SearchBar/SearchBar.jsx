import React from 'react';


class SearchBar extends React.Component {

     constructor(props) {
        super(props);
         this.state = {
             inputValue: "https://restcountries.eu/rest/v2/currency/EUR",
             dataRes: [],
             error: '',
             isRecieved: false
         };
     }



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
        
        fetch(`${this.state.inputValue}?fields=name;alpha2Code`)
            .then(res => res.json())
            .then(
                (result) => {
                    
                    const data = result;
                    if(result.status) { this.setState({ dataRes: [{name: `Error ${result.status} Invalid API query`}]});  return; } else { 
                    this.props.runner(data);
                    this.setState({
                        dataRes: data
                    });
                    }
                },
                (error) => {
                    const err = JSON.stringify(error);
                    this.setState({
                        err
                    });
                    
                }
            );
        
    }

 
    componentDidUpdate(prevProps, prevState) {
        if(this.state.dataRes !== prevState.dataRes) {
            if(this.state.dataRes.length > 0) {
            this.setState({
                isRecieved: true
            });
            }
        }
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
                {(this.state.isRecieved) ? (this.state.dataRes.map((a ,k) => <div key={k}> {a.name}</div>)) : null }
              </div>
            </div>
        );
}
}

    


        



export default SearchBar;
