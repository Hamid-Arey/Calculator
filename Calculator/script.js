var num = 0
var num1 = 0
var num2 = 0
var signChoice = ""
const currentOperation = document.getElementById("screen")

function addNum(num) {
  document.getElementById("screen").value = document.getElementById("screen").value + num;
}

function setSign(sign) {
  signChoice = sign;
  num1 = document.getElementById("screen").value;
  document.getElementById("screen").value = "";
}

function equalPressed() {
  num2 = document.getElementById("screen").value;
  if (signChoice == "+") {
    document.getElementById("screen").value = Number(num1) + Number(num2);
  } else if (signChoice == "-") {
    document.getElementById("screen").value = Number(num1) - Number(num2)
  } else if (signChoice == "×") {
    document.getElementById("screen").value = Number(num1) * Number(num2)
  } else if (signChoice == "÷") {
    document.getElementById("screen").value = Number(num1) / Number(num2)
  } else if (signChoice == "X^Y") {
    document.getElementById("screen").value = Number(num1) ** Number(num2)
  }
}

function sin() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.sin(Number(num))
}

function cos() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.cos(Number(num))
}

function tan() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.tan(Number(num))
}

function asin() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.asin(Number(num))
}

function acos() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.acos(Number(num))
}

function atan() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.atan(Number(num))
}

function log() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.log(Number(num))
}

function negNum() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Number(num) * (-1)
}

function squardR() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Math.sqrt(num)
}

function percent() {
  var num = document.getElementById("screen").value
  document.getElementById("screen").value = Number(num) / 100
}

function change() {
  document.getElementById("Sqr").style.display = "none"
  document.getElementById("SqrR").style.display = "inline-block"
  document.getElementById("inverse").style.display = "none"
  document.getElementById("Inverse").style.display = "inline-block"
  document.getElementById("Sin").style.display = "none"
  document.getElementById("invSin").style.display = "inline-block"
  document.getElementById("Cos").style.display = "none"
  document.getElementById("invCos").style.display = "inline-block"
  document.getElementById("Tan").style.display = "none"
  document.getElementById("invTan").style.display = "inline-block"
  document.getElementById("Percent").style.display = "none"
  document.getElementById("Pi").style.display = "inline-block"
}

function Bchange() {
  document.getElementById("Sqr").style.display = "inline-block"
  document.getElementById("SqrR").style.display = "none"
  document.getElementById("inverse").style.display = "inline-block"
  document.getElementById("Inverse").style.display = "none"
  document.getElementById("Sin").style.display = "inline-block"
  document.getElementById("invSin").style.display = "none"
  document.getElementById("Cos").style.display = "inline-block"
  document.getElementById("invCos").style.display = "none"
  document.getElementById("Tan").style.display = "inline-block"
  document.getElementById("invTan").style.display = "none"
  document.getElementById("Percent").style.display = "inline-block"
  document.getElementById("Pi").style.display = "none"
}

function Delete() {
  currentOperation.textContent.slice(0, -1)
}