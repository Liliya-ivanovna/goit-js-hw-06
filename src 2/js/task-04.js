const linkBtnIncrement = document.querySelector('[data-action="increment"]');
const linkBtnDecrement = document.querySelector('[data-action="decrement"]');
const spanEl = document.getElementById('value');
let  counterValue = 0;
linkBtnIncrement.addEventListener('click',btnIncrement);
linkBtnDecrement.addEventListener('click', btnDecrement);
function btnIncrement(){
    counterValue += 1;
    spanEl.textContent = counterValue;
}
function btnDecrement(){
    counterValue -= 1;
    spanEl.textContent = counterValue;
}  



