const display = document.querySelector('.display')
const btn = document.querySelectorAll('.btn')

function appendNumber(number){
    if (display.value === '0' || display.value === 'error') {
        display.value = ''}
    display.value += number
}

function clearDisplay(){
    display.value = 0
}
function calculate(operator){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "error"
    }
}
function deleteDisplay(){
    const arr = display.value.split('')
    arr.pop()
    display.value = arr.join('')
}