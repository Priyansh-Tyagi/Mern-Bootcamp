import React from "react";

function Hello (props) {
    return ( 
        <>
            <h1>Hello World! {props.name}</h1>
            <h2>Age is {props.age}</h2>
            <h3>Marks are:</h3>
            {props.marks.map((mark, index) => (
                <p key={index}>{mark}</p>
            ))}
        </>    
     );
}
 
export default Hello;