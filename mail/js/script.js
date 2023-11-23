const mailList = ["piega@mail.com", "successo@mail.com", "quando@mail.com", "gatto@mail.com", "area@mail.com"]
let mail = prompt('Inserisci la tua mail')
let conferma = false
for(let i=0; i<mailList.length;i++){
    if(mail == mailList[i]){
        conferma= true
    }
}
if(conferma == true){
    alert(`${mail} è presente nella lista. Benvenuto`)
}else{
    alert(`${mail} non è presente nella lista. Accesso Negato!!!!!`)
}
