import React from 'react';
import EmptyDiv from './EmptyDiv'

const Menu = ()=>{
    return(
        <div className="menu layout grid-one-column">
                <div className="h-1">Bible Quiz</div>
                <div className='sub--h1'>A simple quiz about the books of the bible</div>
                <EmptyDiv height='2.81rem'/>
                <div className='round-border btn-filled landing-btn-text'>Start</div>            
        </div>

    )
}

export default Menu