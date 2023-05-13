const arr = document.querySelectorAll('.item');
 console.log(`Number of categories:${arr.length}`);   
arr.forEach(element => {
    const category = element.firstElementChild.firstChild;
  console.log(`Category:`, category) ;
const elements = element.lastElementChild.children.length;
console.log(`Elements:${elements}`);
});
