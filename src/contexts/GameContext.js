import React, {createContext,useReducer} from 'react'


import {questions} from '../questions'

export const GameContext = createContext()
const reducer = (state,action)=>{
    switch(action.type){
        case('NEW'):            
            const qo = questions(state.numChoices)
            return {
                ...state,
                question:qo.question,
                correctAns:qo.correctAns,
                choices:qo.choices,
                hasAnswered:false
            }            
        case 'CORRECT':
            return {
                ...state,
                score:state.score+1,
                hasAnswered:true,
                choices: state.choices.map((d)=>{
                    if(d.id===action.payload) d.status='correct'
                    return d
                })
            }            
        case 'INCORRECT':
            if(state.choices[action.payload].status!=='incorrect'){
                return {
                    ...state,
                    score:state.score-1,
                    choices: state.choices.map((d)=>{
                        if(d.id===action.payload) d.status='incorrect'
                        return d
                    })
                }
            }
            return state
        case 'ADD_OPT':
            if(state.numChoices<8){
                return{
                    ...state,
                    numChoices:state.numChoices+1
                }
            }
            else return state
        case 'MINUS_OPT':
            if(state.numChoices>2){
                return{
                    ...state,
                    numChoices:state.numChoices-1
                }
            } 
            else return state          
        default:
    }
}

const initState ={
    hasAnswered:false,
    score:0,
    question:'',
    correctAns:-1,
    numChoices:3,
    choices:[]
}

const GameContextProvider =(props)=>{
    const [gameState, gameDispatch] = useReducer(reducer,initState);
    return(
        <GameContext.Provider value={{gameState,gameDispatch}}>
            {props.children}
        </GameContext.Provider>
    )
}


export default GameContextProvider