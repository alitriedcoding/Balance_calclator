document.getElementById("but").addEventListener("click", calculate);
const inputeone = document.getElementById("numberone");
const inputetwo = document.getElementById("numbertwo");
function calculate() {
  const inputeValueone = inputeone.value;
  const inputeValauetwo = inputetwo.value;
  const total = inputeValueone * (1 + inputeValauetwo / 100);
  document.getElementById("p1").innerHTML = total.toFixed(2);
}
