// Get all circular div elements
const circularDivs = document.querySelectorAll('.circular-div');
const thankyou = document.querySelector('.thankyou-state');
const first = document.querySelector('.first-state');

// Function to apply hover styles
function applyHoverStyles(div) {
  div.style.backgroundColor = "hsl(217, 12%, 58%)";
  div.style.color = "white";
}

function thankyouvisible(){
    thankyou.style.display = "flex";
    first.style.display = "none";


}
// Function to reset styles
function resetStyles(div) {
  div.style.backgroundColor = "#262d37";
  div.style.color = "hsl(217, 12%, 63%)";
}

// Add event listeners for click, hover, and mouseout
circularDivs.forEach(div => {
  let isClicked = false;

  // Click event
  div.addEventListener('click', () => {
    if (isClicked) {
      resetStyles(div);
    } else {
      div.style.backgroundColor = "hsl(25, 97%, 53%)";
      div.style.color = "#eef3f5";
    }
    isClicked = !isClicked;
  });

  // Hover event
  div.addEventListener('mouseover', () => {
    if (!isClicked) {
      applyHoverStyles(div);
    }
  });

  // Mouseout event
  div.addEventListener('mouseout', () => {
    if (!isClicked) {
      resetStyles(div);
    }
  });
});
