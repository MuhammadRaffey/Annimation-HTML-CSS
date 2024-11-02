// script.js
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".name");
  nameElement.addEventListener("mouseover", () => {
    nameElement.style.color = "#e74c3c";
  });
  nameElement.addEventListener("mouseout", () => {
    nameElement.style.color = "#ecf0f1";
  });
});
