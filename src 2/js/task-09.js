function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const divEl = document.querySelector('.widget');
console.log(getRandomHexColor());
btnChangeEl.addEventListener('click', ()=>{
spanEl.textContent = getRandomHexColor();
divEl.parentNode.style.backgroundColor = getRandomHexColor();
});
