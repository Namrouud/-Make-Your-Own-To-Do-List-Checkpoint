import React from 'react';


export default function Mybutton (props)
{


    return (           
<>
<button onClick={props.onClick}  >{props.label}</button>
</>

    )
}