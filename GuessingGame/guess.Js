function promptu() {
    user = prompt('enter a number between 0 and 10 ');
    guess = 0;
    if (user == number) {
        document.write('correct!')
        alert('correct!', guess, ' guesses');
    } else {
        if (number > user) {
            document.getElementById('answer').innerHTML = 'incorrect try again! your number was too small';
            guess + 1;
        } else {
            document.getElementById('answer').innerHTML = 'incorrect try again! your number was too big';
            guess + 1;
        }

    }
}

function numbergen() {
    number = Math.floor(Math.random() * 11);
}