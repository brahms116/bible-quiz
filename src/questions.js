import list from './books.js'

export const questions=(opts)=>{

    let qo ={}

    const type = Math.ceil(Math.random()*2) 
    const difficulty = 4
    let range = [] //range of all the options 
    let choiceText=[];
    let book;


    //choices algorithm
    switch(type){
        case 1: //book before
            book =Math.ceil(Math.random()*(list.length-1)) //make sure its not genesis
            qo.question = `What's the book before ${list[book]}`

            range[0] = list[book-1] //setting the correct answer
            if (book-1-difficulty<0){
                for(let i=0;i<book-1;i++){
                    range.push(list[book-2-i]) //grabbing the books before
                }
                for(let i=0;i<(difficulty-(book-1)+difficulty);i++){ //addding the remainder to the other side             
                    range.push(list[book+i+1])
                } //confusing????
            }else if (book+difficulty>list.length-1){ //length-1 is the last index
                for(let i=0;i<list.length-1-book;i++){  //difference from the last index to book
                    range.push(list[book+i+1])                   
                }
                for(let i=0;i<(difficulty+difficulty-(list.length-book));i++){ //took me ages here i dumb... //taking that difference and adding it to the other side                 
                    range.push(list[book-i-2])
                }
            }else{
                for(let i = 0; i<difficulty; i++){
                    range.push(list[book-i-2],list[book+i+1]);
                }
            }
            break
        case 2:
            book =Math.floor(Math.random()*(list.length-1)) //make sure its not revelation
            // console.log(book)
            qo.question = `What's the Book after ${list[book]}`  
            range[0]=list[book+1] //setting the correct book
            // console.log(range);
            //if book is close to revelations
            if(book+1+difficulty>list.length-1){
                for(let i=0;i<list.length-1-(book+1);i++){
                    range.push(list[book+2+i])
                }
                for(let i=0;i<2*difficulty-(list.length-1-(book+1));i++){
                    range.push(list[book-1-i])
                }
            }
            console.log(range);
            //if book is close to start
            if(book-difficulty<0){
                for(let i=0;i<book;i++){
                    range.push(list[book-1-i])
                }
                for(let i=0;i<2*difficulty-book;i++){
                    range.push(list[book+2+i])
                }
            }
            else{
                for(let i = 0; i<difficulty; i++){
                    range.push(list[book-i-1],list[book+i+2]);
                }
            }
            console.log(range);
            break
        default:
            console.log('defaultcase')

    }

    //putting values in choiceText
            
            
    let num;
    for(let i = 0; i<opts-1;i++){
        do{
            num = Math.ceil(Math.random()*(range.length-1))                    
        }
        while(choiceText.includes(range[num]))                
        choiceText[i] = range[num]   
        
    }
    console.log(choiceText)
    qo.correctAns = Math.floor(Math.random()*(choiceText.length+1))    
    choiceText.splice(qo.correctAns,0,range[0])
    
    
    qo.choices = choiceText.map((x,i)=>{
        return {id:i,status:'unanswered',value:x}
    })

    
    return qo
}