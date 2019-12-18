import React,{useContext} from 'react';
import EmptyDiv from './EmptyDiv'
import {AuthContext} from '../contexts/AuthContext'
import {useHistory} from 'react-router-dom'

const Menu = ()=>{
    
    const {dispatch} = useContext(AuthContext)
    const history = useHistory()
    const handleClick = ()=>{
        dispatch({type:'LOGIN'})
        history.push('/game')


    }
    return(
        <div className="menu layout grid-one-column">
                <div className="h-1">Bible Quiz</div>
                <div className='sub--h1'>A simple quiz about the books of the bible</div>
                <EmptyDiv height='2.81rem'/>
                <div className='round-border btn-filled landing-btn-text' onClick={handleClick}>Start</div>            
        </div>

    )
}

export default Menu