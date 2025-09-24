const arr1 = [136, 661, 9, 911, 22, 'Строка']
const arr2 = ['Нечисло', 0, -22, -992, -1, -2323]
const arr3 = [10000, -333, 435, 121, 'Белиберда', -111]
const arr4 = [-343, -509, -435, -121, 'User name', -473]

let NotaNumberList = []

function maxCount(param) {
  let maxCountNum = null;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(element)) {
      NotaNumberList.push(element)
      continue;
    }

    if (maxCountNum === null || element > maxCountNum) {
      maxCountNum = element;
    }
  }
  return maxCountNum;
}
console.log("\n=== Итоговые результаты ===")
console.log(`Максимального значения в массиве 'arr1': ${maxCount(arr1) }`)
console.log(`Максимального значения в массиве 'arr2': ${maxCount(arr2) }`)
console.log(`Максимального значения в массиве 'arr3': ${maxCount(arr3) }`)
console.log(`Максимального значения в массиве 'arr4': ${maxCount(arr4) }`)
console.log("\n=== Также в массивах были обнаружены нечисловые значения ===")
let productListText = ""
for (let i = 0; i < NotaNumberList.length; i++) {
  const element = NotaNumberList[i];
  productListText += `${element}\n`  
}
console.log(productListText)