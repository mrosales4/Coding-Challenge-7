// U22978120

const form = document.getElementById('feedbackForm');
const feedbackDisplay = document.getElementById('feedbackDisplay');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comments = document.getElementById('comments').value;

  // Validate if all fields are filled
  if (!name || !rating || !comments) {
    alert('Please fill in all fields!');
    return;
  }
