// let plateBank = [
//   [35, 35],
//   [25, 25, 25, 25],
//   [5, 5, 5, 5, 5, 5],
//   [2.5, 2.5],
//   [1, 1, 1, 1],
// ];

const form = document.querySelector(".form");
const workWeight = document.getElementById("work-weight");
const submitBtn = document.getElementById("submit-btn");
const result = document.querySelector(".result");
const barbells = document.getElementsByName("barbell");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

barbells.forEach((barbell) => {
  barbell.addEventListener("click", calculate);
});

function calculate() {
  let barWeight;
  // check which bar is selected and assign bar weight that value
  for (let i = 0; i < barbells.length; i++) {
    if (barbells[i].checked) {
      barWeight = barbells[i].value;
    }
  }
  const weightPerSide = (workWeight.value - barWeight) / 2;
  result.innerHTML = `<span class="lbs">${weightPerSide} lbs</span><br />on each side`;
}
