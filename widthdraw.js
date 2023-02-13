// console.log('widthdraw');
document.getElementById('btn_widthdraw').addEventListener('click', function () {
  const newWidthdraw = inputFieldValue('widhdraw_input_field');
  const preWidthdraw = preValueTotal('widthdraw_total');
  const preBalance = preValueTotal('balance_total');
  const currentWidthdraw = newWidthdraw + preWidthdraw;
  const currentBalance = preBalance - newWidthdraw;
  if (isNaN(newWidthdraw)) {
    alert('please give a valid number');
    return;
  }
  if (preBalance < newWidthdraw) {
    alert('Baper Bank a eto taka nai');
    return;
  }

  setValue('widthdraw_total', currentWidthdraw);
  setValue('balance_total', currentBalance);
});
