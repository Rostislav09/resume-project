/*Header BurgerMenu*/
document.querySelector('.header-burger').addEventListener('click', () => {
    document.querySelector('.header-burger').classList.toggle('active');
  });

  document.querySelector('.header-burger').addEventListener('click', () => {
    document.querySelector('.line-block-right').classList.toggle('active');
  });

  document.querySelector('.header-burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lock');
  });


  /*Form*/

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);
      

      if(error === 0) {
        form.classList.add('sending')
        let response = await fetch('sendmail.php',{
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formPreview.innerHTML = '';
          form.reset();
          form.classList.remove('sending');
        } else {
          alert("Soory :( Error")
        } 

      } else {
        alert('Please fill in all input fields');
        form.classList.remove('sending');
      }
    }

    function formValidate(form){
      let error = 0;
      let formReq = document.querySelectorAll('.req');

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if(input.classList.contains('email')) {
          if(emailTest(input)){
            formAddError(input);
            error++;
          }
        }else if(input.getAttribute("type") === "checkbox" && input.checkbox === false){
          formAddError(input);
          error++;
        }else{
          if (input.value === ''){
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }
    function formAddError(input){
      input.parentElement.classList.add('error');
      input.classList.add('error');
    }
    function formRemoveError(input){
      input.parentElement.classList.remove('error');
      input.classList.remove('error');
    }
    function emailTest(input){
      return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
    }

  });
