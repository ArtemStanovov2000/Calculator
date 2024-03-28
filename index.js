let input = document.getElementById("input")
let output = document.getElementById("output")
// Переменные
let isLastChar = false
// Функции
const clr = () => {
  input.innerText = "0"
  output.innerText = "0"
}

const clrSymbol = () => {
  input.innerText = input.innerText.substring(0, input.innerText.length - 1);
}

const calcInput = () => {
  input.innerText = output.innerText
}

const calcOutput = () => {
  output.innerText = eval(input.innerText)
}

const add = (value) => {
  if (input.innerText.length <= 10) {
    if (input.innerText === "0") {
      input.innerText = value
    } else {
      if(!(input.innerText.includes(".") && value === ".")) {
        input.innerText += value
      }
    }
  }
}

const addNum = (num) => {
  add(num)
  isLastChar = false
  calcOutput()
}

const addChar = (char) => {
  if (!isLastChar) add(char)
  isLastChar = true
}
