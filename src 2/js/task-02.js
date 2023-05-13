const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const linkUl = document.getElementById('ingredients');
const array = [];
for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.classList.add('item'); 
  liEl.textContent = ingredient;
  array.push(liEl);
}
linkUl.append(...array);

 


