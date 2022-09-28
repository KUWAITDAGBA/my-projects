let number = 0
let first = document.getElementById('p1Display')
function action(){
    number++
    console.log(number);
    first.innerHTML=number
}

function bat(){
    number--
    console.log(number);
    first.innerHTML=number
}

function home(){
    number=0
    console.log(number);
    first.innerHTML=number
}