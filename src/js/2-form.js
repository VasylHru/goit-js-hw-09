

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.feedback-form');
  const formData = {
      email: "",
      message: ""
  };

  
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
      formData.email = storedData.email;
      formData.message = storedData.message;
      populateForm(); 
  }

  form.addEventListener('input', function(event) {
      if (event.target.matches('input[type="email"]')) {
          formData.email = event.target.value;
      } else if (event.target.matches('textarea')) {
          formData.message = event.target.value;
      }
      saveFormData(); 
  });


  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
   
      if (formData.email.trim() === '' || formData.message.trim() === '') {
          alert('Fill please all fields');
          return;
      }

      console.log(formData);


      localStorage.removeItem('feedback-form-state');
      formData.email = "";
      formData.message = "";
      populateForm(); 
  });

 
  function saveFormData() {
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }


  function populateForm() {
      document.querySelector('input[type="email"]').value = formData.email;
      document.querySelector('textarea').value = formData.message;
  }
});