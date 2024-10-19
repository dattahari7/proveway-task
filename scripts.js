// Set default option on page load
document.addEventListener("DOMContentLoaded", () => {
  const defaultOption = document.querySelector('input[name="bogo"]:checked');
  if (defaultOption) {
    defaultOption.closest(".option").classList.add("active"); // Add 'active' border to default option
    document.getElementById("size-color-2").style.display = "flex";

  }
});

document.getElementById("bogo-form").addEventListener("change", updateTotal);

function updateTotal() {
  const selectedOption = document.querySelector(
    'input[name="bogo"]:checked'
  ).value;
  let totalPrice = 0;

  // remove all active classes
  document
    .querySelectorAll(".option")
    .forEach((el) => el.classList.remove("active"));

  // add active class to checked option
  document
    .querySelector(`input[name="bogo"]:checked`)
    .closest(".option")
    .classList.add("active");

  // Hide all collapsible contents by default
  document
    .querySelectorAll(".collapsible-content")
    .forEach((el) => (el.style.display = "none"));

  switch (selectedOption) {
    case "1":
      totalPrice = 10.0;
      document.getElementById("size-color-1").style.display = "flex"; // Show size & color for 1 units
      break;
    case "2":
      totalPrice = 18.0;
      document.getElementById("size-color-2").style.display = "flex"; // Show size & color for 2 units
      break;
    case "3":
      totalPrice = 24.0;
      document.getElementById("size-color-3").style.display = "flex"; // Show size & color for 3 units
      break;
  }

  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(
    2
  )} USD`;
}
