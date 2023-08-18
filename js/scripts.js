function calculateExpenses() {
  const income = getInputValueById("income");
  const food = getInputValueById("food");
  const rent = getInputValueById("rent");
  const clothes = getInputValueById("clothes");
  
  // Validation
  if(isNaN(income) || isNaN(rent) || isNaN(food) || isNaN(clothes)){
    alert('Please insert number!');
    return;
  }

  const totalExpenses = food + rent + clothes;
  const balanceTotal = income - totalExpenses;
  setElementValueById("expenses", totalExpenses);
  setElementValueById("balance", balanceTotal);
}

function calculateDiscount() {
  const income = getInputValueById("income");
  const food = getInputValueById("food");
  const rent = getInputValueById("rent");
  const clothes = getInputValueById("clothes");
  
  // Validation
  if(isNaN(income) || isNaN(rent) || isNaN(food) || isNaN(clothes)){
    alert('Please insert number!');
    return;
  }

  const totalExpenses = food + rent + clothes;
  const discount = getInputValueById("discount");
  const savingAmount = totalExpenses * (discount / 100);
  const balanceTotal = income - totalExpenses;
  const remainingBalance = balanceTotal + savingAmount;
  setElementValueById("saving-amount", savingAmount);
  setElementValueById("remaining-balance", remainingBalance);
}

// reusable get input value field in number
function getInputValueById(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  // if (isNaN(value)) {
  //   alert('Please insert a valid number'); 
  //   return value;
  // }
  return value;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value.toFixed(2);
}
