// Get all circular div elements
const circularDivs = document.querySelectorAll('.circular-div');
const thankyou = document.querySelector('.thankyou-state');
const first = document.querySelector('.first-state');
let selectedRating = 3; // Initialize with a default rating

// Define the setRating function
function setRating(rating) {
  selectedRating = rating; // Update the selected rating
  updateDisplayRating(); // Update the displayed rating
  resetStyles(); // Reset styles for all circular divs
  applyActiveStyles(); // Apply active styles to the selected circular div
}

// Function to apply hover styles
function applyHoverStyles(div) {
  div.style.backgroundColor = "hsl(217, 12%, 58%)";
  div.style.color = "white";
}

function thankyouvisible() {
  thankyou.style.display = "flex";
  first.style.display = "none";
  updateDisplayRating(); // Update the displayed rating when the thank you state is shown
}

function updateDisplayRating() {
  const displayRating = document.getElementById('display-rating');
  displayRating.textContent = selectedRating;
}

// Function to reset styles for all circular divs
function resetStyles() {
  circularDivs.forEach(div => {
    div.style.backgroundColor = "#262d37";
    div.style.color = "hsl(217, 12%, 63%)";
  });
}

// Function to apply active styles to the selected circular div
function applyActiveStyles() {
  const selectedDiv = circularDivs[selectedRating];
  selectedDiv.style.backgroundColor = "hsl(25, 97%, 53%)";
  selectedDiv.style.color = "#eef3f5";
}

// Add event listeners for click, hover, and mouseout
circularDivs.forEach(div => {
  // Hover event
  div.addEventListener('mouseover', () => {
    if (selectedRating === 0) {
      applyHoverStyles(div);
    }
  });

  // Mouseout event
  div.addEventListener('mouseout', () => {
    if (selectedRating === 0) {
      resetStyles();
    }
  });
});

// Initial update of displayed rating
updateDisplayRating();
