import React,{useContext, useEffect} from 'react'
import EmptyDiv from './EmptyDiv'
import {GameContext} from '../contexts/GameContext'
import anime from 'animejs/lib/anime.es.js'


const Options = (props)=>{
    const {gameState,gameDispatch} = useContext(GameContext)

    const add = ()=>{
        gameDispatch({type:'ADD_OPT'})
    }
    const minus = ()=>{
        gameDispatch({type:'MINUS_OPT'})
    }

    

    return(
        <div className={props.isOpen?'options round-border-small':'options round-border-small close'}>
            <div className='panel round-border-small shadow'>
                <div className='btn-outlined small-btn-text round-border' onClick={()=>{props.toggle()}}>Close</div>
                <EmptyDiv height='2.81rem'/>
                <div className='options-text'>Num of Ans choices</div>
                <EmptyDiv height='2.81rem'/>
                <div className='control'>
                    <div className="arrow-up" onClick={add}/>
                    <EmptyDiv height='0.25rem'/>
                    <div className='num-choices-text'>{gameState.numChoices}</div>
                    <EmptyDiv height='0.25rem'/>
                    <div className="arrow-down" onClick={minus}/>
                </div>
                <EmptyDiv height='2.81rem'/>
            </div>
        </div>
    )
}
export default Options 