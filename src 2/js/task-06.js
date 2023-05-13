let inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur',(event)=>{
        let dataLength = inputEl.getAttribute('data-length');
        let eventLength = event.currentTarget.value.length;
        if (+dataLength===(eventLength)){
inputEl.classList.remove('invalid');
inputEl.classList.add('valid');
}else{
inputEl.classList.remove('valid');
inputEl.classList.add('invalid');
}});



  
