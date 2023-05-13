let formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', formSubmitted);
function formSubmitted(event){
  event.preventDefault();
   let emailInput = this.elements.email;
   let passwordInput = this.elements.password;
   if (emailInput.value===''||passwordInput.value===''){
    alert('Всі поля повинні бути заповнені!');
   }else if(emailInput.value && passwordInput.value){ const information = {
    email: emailInput.value,
    password: passwordInput.value,
   };
console.log(`Information of login `,information);
formEl.reset();
   };
};