const display = document.querySelector(".display");
const list = document.querySelectorAll(".show-display");

function showDisplay(event) {
    const contact = event.target.innerText;
    if (display.innerHTML == 0) {
       return display.innerHTML = contact
    } else {
       return display.innerHTML += contact
    }
}

function calculate() {
    display.innerHTML = eval(display.innerHTML)
}

function clearAll() {
    display.innerHTML = 0
}

function clearLast() {
    const text = display.innerHTML;
    display.innerHTML = text.substring(0 ,text.length - 1)
}

document.querySelector(".clear-last").addEventListener("click" ,clearLast);
document.querySelector(".all-clear").addEventListener("click" ,clearAll);
document.querySelector(".calculate").addEventListener("click" ,calculate);
list.forEach(item => {
    item.addEventListener("click" ,showDisplay)
})