import React from 'react'
import EmptyDiv from './EmptyDiv'


const Options = ()=>{
    return(
        <div className='options round-border-small close'>
            <div className='panel round-border-small shadow'>
                <div className='btn-outlined small-btn-text round-border'>Close</div>
                <EmptyDiv height='2.81rem'/>
                <div className='options-text'>Num of Ans choices</div>
                <EmptyDiv height='2.81rem'/>
                <div className='control'>
                    <div className="arrow-up"/>
                    <EmptyDiv height='0.25rem'/>
                    <div className='num-choices-text'>3</div>
                    <EmptyDiv height='0.25rem'/>
                    <div className="arrow-down"/>
                </div>
                <EmptyDiv height='2.81rem'/>
            </div>
        </div>
    )
}
export default Options 