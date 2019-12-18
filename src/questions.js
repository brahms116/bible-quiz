import list from './books.js'

export const questions=(opts)=>{

    let qo ={
        
        choices:[
            {id:0,status:'unanswered',value:'FirstChoice'},
            {id:1,status:'unanswered',value:'SecondChoice'},
            {id:3,status:'unanswered',value:'ThirdChoice'},
        ],
    }

    const type = 1 
    const difficulty = 5
    let range = [] //range of all the options 
    let choiceText=[];


    //choices algorithm
    switch(type){
        case 1: //book before
            let book =Math.ceil(Math.random()*(list.length-1)) //make sure its not genesis
            qo.question = `What is the book before ${list[book]}`

            range[0] = list[book-1] //setting the correct answer
            if (book-1-difficulty<0){
                for(let i=0;i<book-1;i++){
                    range[1+i]=list[book-1-i-1]
                }
                for(let i=0;i<(difficulty-(book-1)+difficulty);i++){ //took me ages here i dumb
                    
                    
                    range[book-1+i+1]=list[book+i+1]
                } //confusing????
                

            }
            else if (book+difficulty>list.length-1){
                for(let i=0;i<list.length-book-1;i++){
                    range[1+i]=list[book+i+1]
                    console.log(range)
                    
                }
                for(let i=0;i<(difficulty+difficulty-(list.length-book));i++){ //took me ages here i dumb
                    
                    
                    range[list.length-book+i]=list[book-i-2]
                }
            }
            else{
                for(let i = 0; i<difficulty; i++){
                    range[range.length] = list[book-i-2];
                    range[range.length] = list[book+i+1]

                }
            }
            console.log(range)
            //putting values in choiceText
            
            
            let num;
            for(let i = 0; i<opts-1;i++){
                do{
                    num = Math.ceil(Math.random()*(range.length-1))
                    
                }
                while(choiceText.includes(range[num]))
                
                choiceText[i] = range[num]
                
                
            }
            
            break

        default:
            console.log('defaultcase')

    }
    qo.correctAns = Math.floor(Math.random()*choiceText.length)    
    choiceText.splice(qo.correctAns,0,range[0])
    
    console.log(choiceText)
    qo.choices = choiceText.map((x,i)=>{
        return {id:i,status:'unanswered',value:x}
    })

    
    return qo
}