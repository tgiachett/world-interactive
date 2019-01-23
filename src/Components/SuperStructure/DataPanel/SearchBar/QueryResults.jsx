import React from 'react';

const QueryResults = (props) => {
    const data = props.datares;
    console.log(data);
    if (data) {
        
        data[0].map((a, k) => {

            return (
                <div>
                  `${a} : ${data[1][(k -1)]}`
                </div>

            );});
                        
    }    
    return <div/>;


          
};
export default QueryResults;


