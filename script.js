// Get all OTP input elements
const otpInputs = Array.from(document.querySelectorAll('.code'));

// Focus on the next input after typing a character
otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value) {
      // Focus next input if there is input
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  });

  // Handle backspace on keyup event
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Backspace' && !input.value) {
      // Focus previous input if current input is empty
      if (index > 0) {
        otpInputs[index - 1].focus();
      }
    }
  });
});