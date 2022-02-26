document.getElementById('play-button').addEventListener('click', function(){
    
    document.getElementById('user-text').innerHTML = "Ciao, il tuo numero casuale è: ";

    document.getElementById('computer-text').innerHTML = "Il numero casuale del computer è: ";
    
    let userRandomNumber = document.getElementById('user-number').innerHTML = Math.floor(Math.random() * 6) + 1;

    let computerRandomNumber = document.getElementById('computer-number').innerHTML = Math.floor(Math.random() * 6) + 1;

    if (userRandomNumber > computerRandomNumber) {
        document.getElementById('result').innerHTML = "Complimenti, hai battuto il computer!!!"
/*         let win = document.getElementById('result');
        win.classList.add('win'); */
    } else if (userRandomNumber < computerRandomNumber) {
        document.getElementById('result').innerHTML = "Mi dispiace, hai perso!!!"
/*         let lost = document.getElementById('result');
        lost.classList.add('lost');
        lost.classList.remove('win'); */
    } else {
        document.getElementById('result').innerHTML = "Hai pareggiato!"
/*         let draw = document.getElementById('result');
        draw.classList.add('draw')
        draw.classList.remove('win', 'lost'); */
    }

    console.log(result);
});

const registeredEmails = ["paolo@gmail.com", "salvo@gmail.com", "giovanni@gmail.com", "lucia@gmail.com", "antonella@gmail.com"];

let userEmail = document.getElementById('user-email');

document.getElementById("user-email-register").addEventListener('click', function() {

    for (i = 0; i < registeredEmails.length; i++) {
        if (userEmail.value == registeredEmails[i]) {
            document.getElementById('access-result').innerHTML = "Benvenuto alla festa";
            let partyImage = document.getElementById('party-div');
            partyImage.classList.add('party');
        
        break

        } else {
            document.getElementById('access-result').innerHTML = "Non sei stato accettato, siamo spiacenti!";
            let partyImage = document.getElementById('party-div');
            partyImage.classList.remove('party');
        }
    }
});


