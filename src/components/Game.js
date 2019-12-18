import React from 'react';
import EmptyDiv from './EmptyDiv'
import Options from './Options'
const Game = ()=>{
    return(
        <div className='game layout'>
            <Options/>
            <div className='grid-one-column  shadow round-border-small '>            
                <div className="nav">
                    <div className="nav-text">Score: 15</div>
                    <div className='btn-outlined small-btn-text round-border'>Settings</div>
                </div>
                <EmptyDiv height='6.5rem'/>
                <div className="question-text">What book is before 1 and 2 Corinthians</div>
                <EmptyDiv height='6.25em'/>
                <div className='choice-box choice-text shadow round-border'>Genesis</div>
                <EmptyDiv height='1.875em'/>
                <div className='choice-box choice-text shadow round-border'>Revelations</div>
                <EmptyDiv height='1.875em'/>
                <div className='choice-box choice-text shadow round-border'>Lamentations</div>
                <EmptyDiv height='1.875em'/>
                <EmptyDiv height='1.875em'/>
            </div>
            
        </div>

    )
}


export default Game;