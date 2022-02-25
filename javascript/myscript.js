

document.getElementById('play-button').addEventListener('click', function(){
    
    document.getElementById('user-text').innerHTML = "Ciao, il tuo numero casuale è: ";

    document.getElementById('computer-text').innerHTML = "Il numero casuale del computer è: ";
    
    let userRandomNumber = document.getElementById('user-number').innerHTML = Math.floor(Math.random() * 6) + 1;

    let computerRandomNumber = document.getElementById('computer-number').innerHTML = Math.floor(Math.random() * 6) + 1;

    if (userRandomNumber > computerRandomNumber) {
        document.getElementById('result').innerHTML = "Complimenti, hai battuto il computer!!!"
    } else if (userRandomNumber < computerRandomNumber) {
        document.getElementById('result').innerHTML = "Mi dispiace,hai perso!!!"
    } else {
        document.getElementById('result').innerHTML = "Hai pareggiato!"
    }
})