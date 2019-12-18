import React from 'react';

const EmptyDiv = (props)=>{
    return(
        <div style={{minHeight:props.height,minWidth:props.width,display:"inline"}}/>
        
    )
};

export default EmptyDiv;