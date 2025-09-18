
let animationCount = 0;

// Reusable function to log animation count
function logAnimation(action) {
  animationCount++;
  return `Animation triggered by ${action}. Total count: ${animationCount}`;
}

// Function with parameters to toggle class
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  console.log(logAnimation(className)); 
}


// Animate box on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleAnimation(box, "animate"); // triggers CSS transition
  toggleAnimation(box, "bounce");  // triggers keyframe animation
});

// Modal popup logic
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex";  // show modal container
  modal.classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => { modal.style.display = "none"; }, 500); // wait for transition
});
