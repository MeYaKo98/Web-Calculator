//init
var on = true;
var result = 0;
var value = 0;
var sign = 1;
var operation = '+';
var last_input_operation = false;
var out = false;
var sound = true;
display = document.querySelector('#result');

var beep = new Audio();
beep.src = "beep.mp3";
//CE
function init (){
    display.innerHTML = '0';
    result = 0;
    value = 0;
    sign = 1;
    operation = '+';
    out = false;
    last_input_operation = false;
}
document.querySelector(".CE").addEventListener("click", function(){
    console.log(beep);
    if (sound) beep.play();
    if (!on) return;
    init()
})
//ON/OFF
document.querySelector(".ON").addEventListener("click", function(){
    if (sound) beep.play();
    on = true;
    init();
})
document.querySelector(".OFF").addEventListener("click", function(){
    if (sound && on) beep.play();
    display.innerHTML = '';
    on = false;
    sound = true;
})
//num
document.querySelector(".zero").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 0;
        return;
    }
    display.innerHTML = display.innerHTML + '0';
})
document.querySelector(".one").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 1;
        return;
    }
    display.innerHTML = display.innerHTML + '1';
})
document.querySelector(".two").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 2;
        return;
    }
    display.innerHTML = display.innerHTML + '2';
})
document.querySelector(".three").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 3;
        return;
    }
    display.innerHTML = display.innerHTML + '3';
})
document.querySelector(".four").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 4;
        return;
    }
    display.innerHTML = display.innerHTML + '4';
})
document.querySelector(".five").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 5;
        return;
    }
    display.innerHTML = display.innerHTML + '5';
})
document.querySelector(".six").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 6
        return
    }
    display.innerHTML = display.innerHTML + '6';
})
document.querySelector(".seven").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 7;
        return;
    }
    display.innerHTML = display.innerHTML + '7';
})
document.querySelector(".eight").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 8;
        return;
    }
    display.innerHTML = display.innerHTML + '8';
})
document.querySelector(".nine").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (display.innerHTML==="0" || last_input_operation){
        last_input_operation = false;
        display.innerHTML = 9;
        return;
    }
    display.innerHTML = display.innerHTML + '9';
})
//decimal
document.querySelector(".point").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) init();
    if (last_input_operation ==true){
        last_input_operation = false;
        display.innerHTML = "0.";
    }
    if (display.innerHTML.includes('.')) return;
    display.innerHTML = display.innerHTML + '.';
})

//+/-
document.querySelector(".sign").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (out) return;
    if (display.innerHTML==="0" || last_input_operation) return;
    
    if (display.innerHTML.includes('-')){
        display.innerHTML = display.innerHTML.replace('-','');
    }
    else {
        display.innerHTML = '-' + display.innerHTML;
    }
    last_input_operation = false;
})
//operation
function eval (){
    if (out && last_input_operation) return;
    if (operation =='+') {
        operation = '';
        value += parseFloat(display.innerHTML);
    }
    if (operation =='x') {
        operation = '';
        value *= parseFloat(display.innerHTML);
    }
    if (operation =='/') {
        operation = '';
        value /= parseFloat(display.innerHTML);
    }
    if (operation =='-') {
        operation = '';
        value -= parseFloat(display.innerHTML);
    }
    display.innerHTML = value;
}
document.querySelector(".dollar").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    out = true
    eval();
})
document.querySelector(".plus").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (last_input_operation) {
        operation = '+';
        return;
    }
    out = false;
    eval()
    operation = '+'
    last_input_operation = true;
})
document.querySelector(".X").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (last_input_operation) {
        operation = 'x';
        return;
    }
    out = false;
    eval()
    operation = 'x'
    last_input_operation = true;
})
document.querySelector(".divide").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (last_input_operation) {
        operation = '/';
        return;
    }
    out = false;
    eval()
    operation = '/'
    last_input_operation = true;
})
document.querySelector(".minus").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    if (last_input_operation) {
        operation = '-';
        return;
    }
    out = false;
    eval()
    operation = '-'
    last_input_operation = true;
})
document.querySelector(".sqrt").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    var temp = Math.sqrt(parseFloat(display.innerHTML))
    display.innerHTML = temp;
    if (last_input_operation || out){
        value = temp;
        out = true;
        operation = '';
        last_input_operation = false
    }
})
document.querySelector(".per-cent").addEventListener("click", function(){
    if (!on) return;
    if (sound) beep.play();
    var temp = parseFloat(display.innerHTML)*0.01
    display.innerHTML = temp;
    if (last_input_operation || out){
        value = temp;
        out = true;
        operation = '';
        last_input_operation = false
    }
})
document.querySelector(".Music").addEventListener("click", function(){
    if (on)
    {
        sound = !sound;
        if (sound) beep.play();
    }
})