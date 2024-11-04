
// JavaScript for Modal Handling
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const links = document.querySelectorAll(".footer a");
  const closeButtons = document.querySelectorAll(".close-button");

  // Show modal when link is clicked
  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      modals[index].style.display = "flex";
    });
  });

  // Hide modal when close button is clicked
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.style.display = "none";
    });
  });

  // Hide modal when clicking outside content
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
