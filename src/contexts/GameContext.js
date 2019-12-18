import React, {createContext,useReducer} from 'react'


import {questions} from '../questions'

export const GameContext = createContext()
const reducer = (state,action)=>{
    switch(action.type){
        case('NEW'):            
            const qo = questions(state.numChoices)         


            const newState = {
                ...state,
                question:qo.question,
                correctAns:qo.correctAns,
                choices:qo.choices


            }


            return newState
        case 'CORRECT':
            console.log('hello')
            return {
                ...state,
                score:state.score+1,
                choices: state.choices.map((d)=>{
                    if(d.id===action.payload) d.status='correct'
                    return d
                })
            }
            return 
        case 'INCORRECT':
            if(state.choices[action.payload].status!='incorrect'){
                console.log('here i am')
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
            
        default:
    }
}

const initState ={
    score:0,
    question:'',
    correctAns:-1,
    numChoices:4,
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