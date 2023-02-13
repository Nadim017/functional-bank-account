// function getInputFieldValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputFieldValueString = inputField.value;
//   const inputFieldValue = parseFloat(inputFieldValueString);
//   inputField.value = '';
//   return inputFieldValue;
// }
// function getElementById(elementId) {
//   const element = document.getElementById(elementId);
//   const elementValueString = element.innerText;
//   const elementValue = parseFloat(elementValueString);
//   return elementValue;
// }
// function setElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.innerText = newValue;
// }
function inputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  inputField.value = '';
  return inputValue;
}

function preValueTotal(id) {
  const preValueTotal = document.getElementById(id);
  const preValueTotalString = preValueTotal.innerText;
  const preValue = parseFloat(preValueTotalString);
  return preValue;
}
function setValue(id, value) {
  const getId = document.getElementById(id);
  getId.innerText = value;
}
