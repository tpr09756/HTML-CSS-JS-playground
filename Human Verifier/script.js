const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

elements.forEach(function (el) {
  const color = getRandomColor();
  el.style.background = color;
  el.innerHTML = color;
  selectColor.innerHTML = color;
});

function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

elements.forEach(function (el) {
  el.addEventListener("click", function () {
    if (el.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("You are human!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you are human!");
      location.reload(true);
    }
  });
});
