//part A

const form = document.getElementById('orderform');
const phoneInput = document.getElementById('phone');
const emailInput = document.querySelector('input[name="email"]');
const commentsInput = document.getElementById('comments');
const taglineInput = document.querySelector('input[name="tagline"]');
const colorSelect = document.querySelector('select[name="color"]');
const sizeSelect = document.querySelector('select[name="size"]');
const quantityInput = document.querySelector('input[name="quantity"]');
const deliveryDateInput = document.querySelector('input[name="delivery-date"]');
const recipientNameInput = document.querySelector('input[name="recipient-name"]');
const addressInput = document.querySelector('input[name="address"]');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const commentsError = document.getElementById('commentsError');
const taglineError = document.getElementById('taglineError');
const receiptDiv = document.getElementById('receipt');

form.addEventListener('submit', function(event) {
  let isValid = true;

  phoneError.textContent = '';
  emailError.textContent = '';
  commentsError.textContent = '';
  taglineError.textContent = '';

  if(taglineInput.value.length > 15) {
    taglineError.textContent = 'Tagline must not exceed 15 characters.';
    isValid = false;
  }

  const phoneRegex = /^\d{9}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = 'Phone number must be exactly 9 digits.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (commentsInput.value.length > 200) {
    commentsError.textContent = 'Comments must not exceed 200 characters.';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    event.preventDefault();
    generatereceipt();
  }
});


//part B

function generatereceipt() {
    const currentDate = new Date();


    const receipt = `
    <h2>Order Receipt</h2>
    <p>Tagline: ${taglineInput.value}</p>
    <p>Color:${colorSelect.value}</p>
    <p>Size: ${sizeSelect.value}</p>
    <p>Quantity: ${quantityInput.value}</p>
    <p>Delivery Date: ${deliveryDateInput.value}</p>
    <p>Recipient's Name: ${recipientNameInput.value}</p>
    <p>Address: ${addressInput.value}</p>
    <p>Email: ${emailInput.value}</p>
    <p>Phone Number:> ${phoneInput.value}</p>
    <p>Comments: ${commentsInput.value}</p>
   
    `;


    receiptDiv.innerHTML = receipt;
 
}
