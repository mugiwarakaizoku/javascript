let gameActive = true
let displayPlayer  = document.querySelector('.display')
let initialPlayer = displayPlayer.innerText
let currentPlayer = initialPlayer
let gameState = ["","","","","","","","",""]
let gameStatus = document.querySelector('.gameStatus')
let resetButton = document.querySelector('#reset')
const winningMsg = ()=> `Player ${currentPlayer} won`
const drawMsg = ()=> `Game drawn`
const cells = document.querySelectorAll('.cell')
const winningPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

function changePlayer(){
    if(currentPlayer == "X"){
        displayPlayer.innerText = "O"
    }else{
        displayPlayer.innerText = "X"
    }
    currentPlayer = displayPlayer.innerText
}

function putMark(cell){
    cell.innerText = currentPlayer
}


function upgradeGameState(idx){
    gameState[idx] = cells[idx].innerText
}

function validClick(cell,idx){
    if(cell.innerText !="" || gameStatus.innerText !="")return
    putMark(cell)
    // changePlayer()
    upgradeGameState(idx)
}


function evalBoard(){
    let winnerPresent = false
    for(let i=0;i<8;i++){
        let winPattern = winningPattern[i]
        let a = gameState[winPattern[0]]
        let b = gameState[winPattern[1]]
        let c = gameState[winPattern[2]]
        if(a==""||b==""||c==""){
            continue
        }
        if(a==b && b==c){
            winnerPresent = true
            cells[winPattern[0]].classList.add("highlight")
            cells[winPattern[1]].classList.add("highlight")
            cells[winPattern[2]].classList.add("highlight")
            break;
        }
    }
    if(winnerPresent){
        gameStatus.innerText = winningMsg()
        gameActive=false
        return
    }
    if(!gameState.includes("")){
        gameStatus.innerText = drawMsg()
        gameActive = false
        return
    }
    changePlayer()
}

function restartGame(){
    gameActive = true
    gameState = ["","","","","","","","",""]
    cells.forEach(cell => cell.innerText = "")
    gameStatus.innerText = ""
    document.querySelectorAll(".highlight").forEach(cel => cel.classList.remove('highlight'))
}

cells.forEach(function(val,idx){
    cells[idx].addEventListener('click',()=>{
        validClick(cells[idx],idx)
        evalBoard()
    })
})

resetButton.addEventListener('click',restartGame)
