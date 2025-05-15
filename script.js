

let game_status = false
let quit_btn = document.querySelector(".quit-game")
let start_btn = document.querySelector(".result")
let play_btns =  document.querySelector(".play-btns")
let result_screen = document.querySelector(".result-screen")


//function for getting random computer choice
function getComputerChoice(){
    const choices = ["rock","paper","scissor"]
    random_index = Math.floor(Math.random()*3)
    return choices[random_index]
}



//quit game
function quitGame(){
    game_status = false
    quit_btn.style.visibility = "hidden"
    start_btn.style.visibility = "visible"
    result_screen.innerHTML = "Press Start to Play"
}

// start game
function startGame(){
    game_status = true
    quit_btn.style.visibility = "visible"
    start_btn.style.visibility = "hidden"
    result_screen.innerHTML = "Choose Rock, Paper or Scissor"
}

//function to declare the winner
function getWinner(userChoice,computerChoice){
    let result=""
    if(userChoice == computerChoice) {
        result = "Its a Draw!"
    }else if(userChoice == "rock" && computerChoice =="scissor" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissor" && computerChoice == "paper" ){
        result = `You Won! Computer Chose ${computerChoice.toUpperCase()}`
    }else{
        result = `You Lost Computer Choose ${computerChoice.toUpperCase()}`
    }
    return result

}



play_btns.addEventListener("click", (e)=>{
    if(!game_status) return;
    
    const clicked = e.target
    if(!clicked.classList.contains("btns")) return;

    const userChoice = clicked.id
    const computerChoice = getComputerChoice()
    const result = getWinner(userChoice,computerChoice) 
    
    result_screen.innerHTML = result
    console.log(result);
    
})

start_btn.addEventListener("click",startGame)
quit_btn.addEventListener("click",quitGame)



