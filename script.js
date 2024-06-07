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

  // Create elements to display feedback
  const feedbackDiv = document.createElement('div');
  const feedbackName = document.createElement('p');
  const feedbackRating = document.createElement('p');
  const feedbackComment = document.createElement('p');

  feedbackName.textContent = `Name: ${name}`;
  feedbackRating.textContent = `Rating: ${rating} Stars`;
  feedbackComment.textContent = `Comments: ${comments}`;


  feedbackDiv.appendChild(feedbackName);
  feedbackDiv.appendChild(feedbackRating);
  feedbackDiv.appendChild(feedbackComment);

  // Append feedback to display area
  feedbackDisplay.appendChild(feedbackDiv);
