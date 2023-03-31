let userinput =  parseInt(prompt("please enter 1 for rock , 2 for paper and 3 for scissor  "))
let pc_choice 
let result
let pc_choice_w

function pc_move() {
    let res =  Math.floor(Math.random() * 3 + 1)
    return res
}

function analyze(PcC , UserC){
    if((UserC)&(UserC>0)&(UserC<4)){
        if(((UserC===1)&(PcC===3))||((UserC===2)&(PcC===1))||((UserC===3)&(PcC===2))){
            return "you won"
        }
        else{return "you lost"}
    }
    else {return "please enter a valid value"   }
}

function pc_choice_to_word(input){
    if(input === 1){
        return "PC Chose Rock"
    }
    else if(input === 2){
        return "PC Chose Paper"
    }
    else if(input === 3){
        return "PC Chose scissor"
    }
}

pc_choice = pc_move();
pc_choice_w = pc_choice_to_word(pc_choice)
result = analyze(pc_choice,userinput);
alert(result)
