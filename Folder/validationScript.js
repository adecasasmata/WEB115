// JavaScript code for form validation
window.addEventListener('load', function () {
  // Retrieve the form element
  const form = document.getElementById('myForm');
  // Retrieve the input field element
  const inputField = document.getElementById('inputField');
  // Create an error message element
  const errorMessage = document.createElement('div');
  // Sucess message
  const successMessage = document.createElement('div');

  // Add an event listener to the form for the submit event
  form.addEventListener('submit', function(event) {
      // Prevent default form submission
      event.preventDefault();

      // Retrieve the input field value
      const inputValue = inputField.value;

      // Regular expression pattern for alphanumeric input
      const alphanumericInput = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (!alphanumericInput.test(inputValue)) {
          // Invalid input: display error message
          errorMessage.innerHTML = 'Your input must be alphanumeric!';
          // Append error message to the form element
          if (!form.contains(errorMessage)) {
              form.appendChild(errorMessage);
          }
      } else {
            // Clear error message if present
            if (form.contains(errorMessage)) {
                errorMessage.remove();
            }
            // Display success message
            successMessage.innerHTML = 'Form submitted successfully!';
         
            if (!form.contains(successMessage)) {
            form.appendChild(successMessage);
            }
            // Clear field
            inputField.value = '';
    }
  });
});
