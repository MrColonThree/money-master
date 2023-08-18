
let totalExpenses = 0;
let balanceTotal = 0;

function calculateExpenses(){
  const income = getInputValueById('income');
  const food = getInputValueById('food');
  const rent = getInputValueById('rent');
  const clothes = getInputValueById('clothes');
  const totalExpenses = food + rent + clothes;
  const balanceTotal = income - totalExpenses;

  setElementValueById('expenses', totalExpenses);
  setElementValueById('balance', balanceTotal);
}

function calculateDiscount(){
  const discount = getInputValueById('discount');
  const income = getInputValueById('income');
  const food = getInputValueById('food');
  const rent = getInputValueById('rent');
  const clothes = getInputValueById('clothes');
  const totalExpenses = food + rent + clothes;
  const savingAmount = totalExpenses - (totalExpenses * (discount / 100));
  const balanceTotal = income + savingAmount;
  const remainingBalance = balanceTotal - savingAmount;
  setElementValueById('saving-amount', savingAmount);
  setElementValueById('remaining-balance', remainingBalance);

}


function getInputValueById(inputId){
 const inputField = document.getElementById(inputId);
 const inputFieldText = inputField.value;
 const inputValue = parseFloat(inputFieldText);
 if (isNaN(inputValue)) {
  alert('Please insert number!')
  inputField.value = '';
  p.innerText = '';
}

return inputValue;
}

function setElementValueById(idName, result){
  const p = document.getElementById(idName);
  p.innerText = result.toFixed(2);
  
}

