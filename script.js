let UserInput 
let PcChoice 
let Result
let PcChoiceW

function pc_move() {
    let res =  Math.floor(Math.random() * 3 + 1)
    return res
}

function analyze(PcC , UserC){
    if((UserC)&&(UserC>0)&&(UserC<4)){
        if(((UserC===1)&&(PcC===3))||((UserC===2)&&(PcC===1))||((UserC===3)&&(PcC===2))){
            return 1
        }
        else if(UserC==PcC){
            return 3
        }
        else{return 2}
    }
    else {return 0   }
}

function pc_choice_to_word(input){
    if(input === 1){
        return " Rock"
    }
    else if(input === 2){
        return " Paper"
    }
    else if(input === 3){
        return " scissor"
    }
}
function user_choice_to_word(input){
    if(input === 1){
        return " Rock"
    }
    else if(input === 2){
        return " Paper"
    }
    else if(input === 3){
        return " scissor"
    }
}

function ShowResult(GR,PCC,UsC){
    if(GR===0){
        return  "please enter a valid value"
    }
    else if((GR===1)){
        return "one point for you \n" +`${UsC} beats${PCC}\n You ${player1} \n PC ${player2}`
    }
    else if((GR===2)){
        let x= "one point for pc \n" + `${PCC} beats${UsC}\n You ${player1} \n PC ${player2}`
        return x
    }
    else if((GR===3)){
        return `It's a tie! Try again.\n You ${player1} \n PC ${player2}`
    }
    
}
let player1= 0
let player2= 0

function loop(){
   for (let j = 0; j<Infinity; j++ ){
     if(player1===5){
        
        alert(`You won`+ `\n You ${player1} \n PC ${player2}`);
        break;
     }
     else if(player2===5){
        alert(`PC won`+ `\n You ${player1} \n PC ${player2}`);
        break;
     }
     else{
        InputI =   prompt("please enter 1 for rock , 2 for paper and 3 for scissor  ")
        if(InputI===null){ alert("ok bye"); break;}else{
        UserInput =  parseInt(InputI)
        PcChoice = pc_move();
        PcChoiceW = pc_choice_to_word(PcChoice);
        UserChoicW = user_choice_to_word(UserInput);
        Result = analyze(PcChoice,UserInput);
        if(Result===1){
            player1++
        }
        else if(Result===2){
            player2++

        }
        alert(ShowResult(Result,PcChoiceW,UserChoicW))

     }

     }}
    }
    
loop()