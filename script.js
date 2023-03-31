let UserInput =  parseInt(prompt("please enter 1 for rock , 2 for paper and 3 for scissor  "))
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

function ShowResult(GR,PCC){
    if(GR===0){
        return  "please enter a valid value"
    }
    else if((GR===1)){
        return "yeah! you won\n" +`PC chose ${PCC}`
    }
    else if((GR===2)){
        let x= "oh! you lost\n" + `PC chose ${PCC}`
        return x
    }
}
PcChoice = pc_move();
PcChoiceW = pc_choice_to_word(PcChoice);
Result = analyze(PcChoice,UserInput);
alert(ShowResult(Result,PcChoiceW))



