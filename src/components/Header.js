import React from 'react';

// ecma 6 function 
const Header=(props) =>{
    console.log(props);

    return(
        <div>
    <h1> Hello functional component {props.name} {props.last}</h1>
    {props.children}
    </div> 
    );

}

export default Header;