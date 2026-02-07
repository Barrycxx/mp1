function getNum(id) {
  var v = document.getElementById(id).value.trim();
  if (v === "") return NaN;
  return Number(v);
}

function showResult(result) {
  var out = document.getElementById("output");
  out.innerHTML = String(result);

  if (typeof result === "number" && result < 0) {
    out.style.color = "red";
  } else {
    out.style.color = "white";
  }
}

function showError(msg) {
  var out = document.getElementById("output");
  out.innerHTML = msg;
  out.style.color = "red";
}

function addition() {
  var a = getNum("first-number");
  var b = getNum("second-number");
  if (isNaN(a) || isNaN(b)) {
    showError("Please enter numbers in both boxes.");
    return;
  }
  showResult(a + b);
}

function subtraction() {
  var a = getNum("first-number");
  var b = getNum("second-number");
  if (isNaN(a) || isNaN(b)) {
    showError("Please enter numbers in both boxes.");
    return;
  }
  showResult(a - b);
}

function multiplication() {
  var a = getNum("first-number");
  var b = getNum("second-number");
  if (isNaN(a) || isNaN(b)) {
    showError("Please enter numbers in both boxes.");
    return;
  }
  showResult(a * b);
}

function division() {
  var a = getNum("first-number");
  var b = getNum("second-number");
  if (isNaN(a) || isNaN(b)) {
    showError("Please enter numbers in both boxes.");
    return;
  }
  if (b === 0) {
    showError("Cannot divide by 0.");
    return;
  }
  showResult(a / b);
}

function power() {
  var base = getNum("first-number");
  var exp = getNum("second-number");
  if (isNaN(base) || isNaN(exp)) {
    showError("Please enter numbers in both boxes.");
    return;
  }

  if (!Number.isInteger(exp)) {
    showError("Second number must be an integer for power.");
    return;
  }

  var result = 1;
  var times = exp;

  if (times < 0) {
    times = -times;
  }

  for (var i = 0; i < times; i++) {
    result = result * base;
  }

  if (exp < 0) {
    if (result === 0) {
      showError("Invalid power.");
      return;
    }
    result = 1 / result;
  }

  showResult(result);
}

function clearCalc() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").style.color = "#1f2937";
}
