function dig(n) {
  document.form.area.value = document.form.area.value + n
}
function ris() {
  var c = document.form.area.value;
  if (c) {
    document.form.area.value = eval(c);
  }
}

function reset() {
  document.form.area.value = '';
}

function cancella() {
  var a = document.form.area.value;
  document.form.area.value = a.substring(0, a.length - 1);
}



//-----------ON/OFF-----------

let scritta = document.getElementById('areaTesto').value;
let toggle = document.getElementById('power');
let isShow = true;


toggle.onclick = function () {
  if (isShow) {
    reset();
    areaTesto.style.backgroundColor = 'white';
    areaTesto.style.display = 'block';
    isShow = false;
    toggle.style.backgroundColor ='green';
    areaTesto.style.color = 'black';
  } else {
    xxxx = '';
    areaTesto.style.backgroundColor = 'black';
    isShow = true;
    toggle.style.backgroundColor ='red';
    areaTesto.style.color = 'transparent';
    reset();
  }
}

