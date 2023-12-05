function calculateTip(event) {
  event.preventDefault();
  let bill = parseFloat(document.getElementById("bill").value);
  let serviceQual = document.getElementById("serviceQual").value;
  let numbOfPeople = parseInt(document.getElementById("people").value);

  if (bill == " " || serviceQual == 0) {
    alert("Por favor, preencha os valores");
    return;
  }

  const eachPersonDisplay = numbOfPeople <= 1 ? "none" : "block";
  toggleElementDisplay("each", eachPersonDisplay);

  const totalTip = (bill * serviceQual) / numbOfPeople;
  displayResult("tip", totalTip.toFixed(2));
  toggleElementDisplay("totalTip", "block");
}

function getInputValue(elementId) {
  return document.getElementById(elementId).value.trim();
}

function displayResult(elementId, value) {
  document.getElementById(elementId).innerHTML = value;
}

function toggleElementDisplay(elementId, displayValue) {
  document.getElementById(elementId).style.display = displayValue;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListener("submit", calculateTip);
