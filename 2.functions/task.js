function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    let element = arr[i];

    if (element > max){
      max = element;
    }
    if (element < min){
      min = element;
    }
    sum += element;
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
}

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    let element = arr[i];

    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
   
  for (let i = 0; i < arr.length; i++){
    let element = arr[i];

    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
  }
}

  if (countEvenElement === 0) {
    return 0; 
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
