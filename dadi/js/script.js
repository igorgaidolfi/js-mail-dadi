let player = Math.floor(Math.random () * 6)+1
let computer = Math.floor(Math.random () * 6)+1
let label = ""
console.log(`Giocatore: ${player}`)
console.log(`Computer: ${computer}`)
if(player == computer){
    label = 'Stesso Punteggio'
}else if(player>computer){
    label = 'Giocatore ha vinto'
}else{
    label = 'Computer ha vinto'
}
console.log(label)