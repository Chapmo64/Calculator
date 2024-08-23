let operator = null;
let firstopp = null;

function change(input) {
  const result = document.getElementById("result");
  let display = result.innerHTML;
  const showopp = document.getElementById("showopp");

  switch (input) {
    case "0":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "1":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "2":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "3":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "4":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "5":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "6":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "7":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "8":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "9":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;

    case ".":
      if (display === "0") {
        result.innerHTML = input;
      } else {
        result.innerHTML += input;
      }
      break;
    case "c":
      result.innerHTML = "0";
      firstopp = null;
      operator = null;
      showopp.innerHTML = "---";
      break;
    case "+":
      firstopp = parseFloat(display);
      operator = "+";
      result.innerHTML = "0";
      showopp.innerHTML = input;
      break;
    case "-":
      firstopp = parseFloat(display);
      operator = "-";
      result.innerHTML = "0";
      showopp.innerHTML = input;
      break;
    case "*":
      firstopp = parseFloat(display);
      operator = "*";
      result.innerHTML = "0";
      showopp.innerHTML = input;
      break;
    case "/":
      firstopp = parseFloat(display);
      operator = "/";
      result.innerHTML = "0";
      showopp.innerHTML = input;
      break;
    case "=":
      if (operator === "+") {
        const secondopp = parseFloat(display);
        result.innerHTML = firstopp + secondopp;
        firstopp = null;
        operator = null;
        showopp.innerHTML = "---";
      } else if (operator === "-") {
        const secondopp = parseFloat(display);
        result.innerHTML = firstopp - secondopp;
        firstopp = null;
        operator = null;
        showopp.innerHTML = "---";
      } else if (operator === "*") {
        const secondopp = parseFloat(display);
        result.innerHTML = firstopp * secondopp;
        firstopp = null;
        operator = null;
        showopp.innerHTML = "---";
      } else if (operator === "/") {
        const secondopp = parseFloat(display);
        result.innerHTML = firstopp / secondopp;
        firstopp = null;
        operator = null;
        showopp.innerHTML = "---";
      }
  }
}



