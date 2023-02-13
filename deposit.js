// document.getElementById('btn_deposit').addEventListener('click', function () {
//   const newDepositAmount = getInputFieldValueById('deposit_input_field');
//   const previousDepositTotal = getElementById('deposit_total');
//   const newDepositTotal = newDepositAmount + previousDepositTotal;

//   const balance_total = getElementById('balance_total');

//   const current_balance = balance_total + newDepositAmount;

//   if (isNaN(newDepositAmount)) {
//     alert('Please enter a valid number');
//     return;
//   }
//   setElementValueById('deposit_total', newDepositTotal);
//   setElementValueById('balance_total', current_balance);
// });

document.getElementById('btn_deposit').addEventListener('click', function () {
  const newInputValue = inputFieldValue('deposit_input_field');
  const newValue = preValueTotal('deposit_total');
  const totalDeposit = newInputValue + newValue;

  const preBalance = preValueTotal('balance_total');
  const current_balance = newInputValue + preBalance;

  if (isNaN(newInputValue)) {
    alert('Please enter  valid number');
    return;
  }
  setValue('deposit_total', totalDeposit);
  setValue('balance_total', current_balance);
});
