// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


let campoHtml = document.getElementById('campo-gioco')
let playBtn = document.getElementById('play-btn')


playBtn.addEventListener('click', function(){

    for (let i = 1; i <= 100; i++){
        let box = document.createElement("div")
    
        box.classList.add("box")
    
        box.innerHTML = `<span>${i}</span>`;
        campoHtml.append(box)
    }
})
