"use strict"
function solveEquation(a, b, c) {
  let d = b * b - 4 * a * c;
  
  if (d < 0) {
  return d;
} else if ( d === 0) {
  let x = -b / (2 * a);
  return [x];
} else {
  let x1 = (-b + Math.sqrt(d)) / (2 * a); 
  let x2 = (-b - Math.sqrt(d)) / (2 * a); 
  return [x1, x2];
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;  

  let monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1))); 
  let totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}