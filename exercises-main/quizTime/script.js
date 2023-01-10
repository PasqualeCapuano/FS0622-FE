function quizTimePlus(){
    let numberOne = document.getElementById('numberOne').value;
    let numberTwo = document.getElementById('numberTwo').value;
    let answer1 = document.getElementById('answer1').value;

    let result = Number(numberOne)+Number(numberTwo);
    

    if(answer1 ==result){
        alert('RISPOSTA CORRETTA');
    }else{
        alert('RISPOSTA SBAGLIATA, PROVACI ANCORA!!!');
    }

}

function quizTimeMinus(){
    let numberThree = document.getElementById('numberThree').value;
    let numberFour = document.getElementById('numberFour').value;
    let answer2 = document.getElementById('answer2').value;

    let result = Number(numberThree) - Number(numberFour);
    

    if(answer2 ==result){
        alert('RISPOSTA CORRETTA');
    }else{
        alert('RISPOSTA SBAGLIATA, PROVACI ANCORA!!!');
    }

}

function quizTimeMultiply(){
    let numberFive = document.getElementById('numberFive').value;
    let numberSix = document.getElementById('numberSix').value;
    let answer = document.getElementById('answer3').value;

    let result = Number(numberFive)*Number(numberSix);
    

    if(answer ==result){
        alert('RISPOSTA CORRETTA');
    }else{
        alert('RISPOSTA SBAGLIATA, PROVACI ANCORA!!!');
    }

}

function quizTimeDivide(){
    let numberSeven = document.getElementById('numberSeven').value;
    let numberEight = document.getElementById('numberEight').value;
    let answer = document.getElementById('answer4').value;

    let result = Number(numberSeven)/Number(numberEight);
    

    if(answer ==result){
        alert('RISPOSTA CORRETTA');
    }else{
        alert('RISPOSTA SBAGLIATA, PROVACI ANCORA!!!');
    }

}