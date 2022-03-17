let count = 0

let value = document.querySelector('#value')

const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#increase')
const btnReset = document.querySelector('#reset')

const body = document.querySelector('body')

function increment() {
    count++
    value.textContent = count;
}

function decrease() {

    if (count > 0) {
        count--
    }

    value.textContent = count;
}

function reset() {
    count = 0
    value.textContent = count;
}

function darkmode() {
    if (body.style.backgroundColor == 'white') {
        body.style.backgroundColor = 'black'
    } else { body.style.backgroundColor = 'white' }
}












