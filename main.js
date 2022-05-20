//adding event listeners to titles
document.getElementById("i1").addEventListener("click", i1Toggle);
document.getElementById("i2").addEventListener("click", i2Toggle);
document.getElementById("i3").addEventListener("click", i3Toggle);

// getting images to toggle -- using 1 prop and 2 method --
//classlist == properties
//add() == method
//toggle() == method
function i1Toggle() {
  document.getElementById("trees2").classList.add("hidden");
  document.getElementById("trees3").classList.add("hidden");
  document.getElementById("trees1").classList.toggle("hidden");
}

// function i2Toggle() {}
function i2Toggle() {
  document.getElementById("trees1").classList.add("hidden");
  document.getElementById("trees3").classList.add("hidden");
  document.getElementById("trees2").classList.toggle("hidden");
}

// function i3Toggle() {}
function i3Toggle() {
  document.getElementById("trees1").classList.add("hidden");
  document.getElementById("trees2").classList.add("hidden");
  document.getElementById("trees3").classList.toggle("hidden");
}
