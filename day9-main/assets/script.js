window.alert('Primo esercizio JS 💻')


function addizione() {
    var x = document.getElementById('numberOne').value;
    var y = document.getElementById('numberTwo').value;

    document.getElementById('titolo').innerHTML = Number(x) + Number(y);
}


function feelings() {
    
    if(document.getElementById('scale').value <= 5){
        document.getElementById('titleTwo').innerHTML = '😥'
    }
    else{
        document.getElementById('titleTwo').innerHTML = '🤗'
    }
}

function popUp() {
    alert('Messaggio allerta!')
}

function scrivi() {
    document.write('Fine esercizio')
}