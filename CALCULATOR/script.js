function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var tipPercentage = document.getElementById('tipPercentage').value;
    var totalTip = billAmount * (tipPercentage / 100);
    var totalBill = parseFloat(billAmount) + totalTip;
  
    document.getElementById('totalTip').textContent = 'Total Tip: rs' + totalTip.toFixed(2);
    document.getElementById('totalBill').textContent = 'Total Bill: rs' + totalBill.toFixed(2);
  }
  