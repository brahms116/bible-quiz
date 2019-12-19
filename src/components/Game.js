import React,{useContext,useState,useEffect}from 'react';
import EmptyDiv from './EmptyDiv'
import Options from './Options'
import {GameContext} from '../contexts/GameContext'
import anime from 'animejs/lib/anime.es.js'


const Game = ()=>{

    const {gameState,gameDispatch} = useContext(GameContext)
    const [optState,setOpt] = useState({opt:false})
    const toggleMenu=()=>{
        
        anime({
            targets:'.options',
            opacity:[0.5,1],
            duration:6000,
        })
        setOpt({opt:!optState.opt})
    }
    

    const handleClick=(index)=>{
        if(!gameState.hasAnswered){
            if(index===gameState.correctAns){
                gameDispatch({type:'CORRECT',payload:index})
                setTimeout(()=>{gameDispatch({type:'NEW'})},1000)
            }
            else{
                gameDispatch({type:'INCORRECT',payload:index})
            }
        }
    }
    useEffect(()=>{
        gameDispatch({type:'NEW'})
        anime({
            targets:'.game',
            opacity:[0,1],
            duration:6000,
        })
    },[])

    useEffect(()=>{
       anime({
            targets:'.question-text, .choice-box',
            opacity:[0,1],
            duration:6000,
        })
    },[gameState.question])

    

    return(
        <div className='game layout'>
            <Options isOpen={optState.opt} toggle={()=>{toggleMenu()}}/>
            <div className='grid-one-column  shadow round-border-small '>            
                <div className="nav">
                    <div className="nav-text">Score: {gameState.score}</div>
                    <div className='btn-outlined small-btn-text round-border' onClick={toggleMenu}>Settings</div>
                </div>
                <EmptyDiv height='6.5rem'/>
                <div className="question-text">{gameState.question}</div>
                <EmptyDiv height='5.25rem'/>


                {gameState.choices.map((q)=>{
                    let css = 'choice-box choice-text shadow round-border'
                    switch(q.status){
                        case 'correct':
                            css += ' correct'
                            break
                        case 'incorrect':
                            css+= ' incorrect'
                            break
                        default:

                    }
                    return <div className={css} key={q.id}  onClick={()=>handleClick(q.id)}>{q.value}</div>
                    
                })}


                          
                <EmptyDiv height='1.875em'/>
            </div>
            
        </div>

    )
}


export default Game;