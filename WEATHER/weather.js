let display = document.getElementById('display')
let temp = document.getElementById('temperature')
function action() {
let temperature = Number(temp.value);
if(temperature==25){
    
    display.innerHTML='at room temperature'
}
else if(temperature<=25 && temperature>17){
    
    display.innerHTML='the weather is cold'
}

else if(temperature>25 && temperature<30){
    
    display.innerHTML='the weather is hot'
}
}

let cel = document.getElementById('celcius')
let kel = document.getElementById('kelvin')
function boy(){
    let celcius = Number(cel.value)
    let resultInKelvin = (celcius * 1.8) + 32
    console.log(resultInKelvin);
    kel.value = resultInKelvin
}