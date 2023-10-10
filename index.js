// Get all circular div elements
const circularDivs = document.querySelectorAll('.circular-div');
const thankyou = document.querySelector('.thankyou-state');
const first = document.querySelector('.first-state');
let selectedRating = 3; // Initialize with a default rating

// Function to apply hover styles
function applyHoverStyles(div) {
  div.style.backgroundColor = "hsl(217, 12%, 58%)";
  div.style.color = "white";
}

function thankyouvisible(){
    thankyou.style.display = "flex";
    first.style.display = "none";
    updateDisplayRating(); // Update the displayed rating when the thank you state is shown


}

function updateDisplayRating() {
    const displayRating = document.getElementById('display-rating');
    displayRating.textContent = selectedRating;
  }

// Function to reset styles
function resetStyles(div) {
  div.style.backgroundColor = "#262d37";
  div.style.color = "hsl(217, 12%, 63%)";
}

// Add event listeners for click, hover, and mouseout
circularDivs.forEach(div => {
  // Click event
  div.addEventListener('click', () => {
    selectedRating = parseInt(div.textContent); // Update the selected rating
    updateDisplayRating(); // Update the displayed rating
    resetStyles(div);
        // Update the background color of the selected button to orange
        div.style.backgroundColor = "hsl(25, 97%, 53%)";
        div.style.color = "#eef3f5";
  });

  // Hover event
  div.addEventListener('mouseover', () => {
    if (selectedRating === 0) {
      applyHoverStyles(div);
    }
  });

  // Mouseout event
  div.addEventListener('mouseout', () => {
    if (selectedRating === 0) {
      resetStyles(div);
    }
  });
});

// Initial update of displayed rating
updateDisplayRating();