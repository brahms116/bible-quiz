import React,{useContext,useEffect,useRef} from 'react';
import EmptyDiv from './EmptyDiv'
import {AuthContext} from '../contexts/AuthContext'
import {useHistory} from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'

const Menu = ()=>{
    
    let fadeIn ;

    useEffect(()=>{
        fadeIn =anime({
            targets:'.menu',
            opacity:[0.2,1],
            duration:6000,
            autoplay:false
        })
        fadeIn.play()
    },[])


    const {dispatch} = useContext(AuthContext)
    const history = useHistory()
    const handleClick =()=>{
        // let animation =anime({
        //     targets:'.menu',
        //     opacity:[1,0],         
        // })

        // animation.finished.then(()=>{
            dispatch({type:'LOGIN'})
            history.push('/game')
        // })

            
        
       


    }
    return(
        <div className="menu layout grid-one-column" >
                <div className="h-1">Bible Quiz</div>
                <div className='sub--h1'>A simple quiz about the books of the bible</div>
                <EmptyDiv height='2.81rem'/>
                <div className='round-border btn-filled landing-btn-text' onClick={handleClick}>Start</div>            
        </div>

    )
}

export default Menu