const submitBtn = document.querySelector(".cta-form");
const newsletter = document.querySelector(".newsletter-content");
const input = document.querySelector("form input");
let error = document.createElement("p");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  error.innerHTML = "Please enter a valid email address";
  error.classList.add("error");

  if (input.value.includes("@")) {
    error.innerHTML = "";
    error.remove;
  } else {
    newsletter.appendChild(error);
  }
});
