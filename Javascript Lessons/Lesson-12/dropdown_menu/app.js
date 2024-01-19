const frameworks = document.querySelector(".frameworks"),
  selectedOption = document.querySelector(".selected__option"),
  selectedText = selectedOption.querySelector("span"),
  optionsMenu = document.querySelector(".options"),
  options = optionsMenu.querySelectorAll(".option");

selectedOption.addEventListener("click", function () {
  frameworks.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    selectedText.innerText = e.target.textContent;
    frameworks.classList.remove("active");
    console.log(selectedText.textContent);
  });
});
