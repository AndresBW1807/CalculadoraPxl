const inputpantalla = document.querySelector(".pant2");
const but0 = document.querySelector(".but0");
const but1 = document.querySelector(".but1");
const but2 = document.querySelector(".but2");
const but3 = document.querySelector(".but3");
const but4 = document.querySelector(".but4");
const but5 = document.querySelector(".but5");
const but6 = document.querySelector(".but6");
const but7 = document.querySelector(".but7");
const but8 = document.querySelector(".but8");
const but9 = document.querySelector(".but9");
const butC = document.querySelector(".butC")
const butE = document.querySelector(".butE")
const butIgual = document.querySelector(".butIgual")
const butmas = document.querySelector(".butmas")
const butMenos = document.querySelector(".butMenos")
const butAst = document.querySelector(".butAst")
const butslash = document.querySelector(".butslash")
const butpunto = document.querySelector(".butpunto")

let operacion;
let val1;
let val2;


but0.onclick = function () {
  if (inputpantalla.value != "0") {
    inputpantalla.value = inputpantalla.value + "0";
  }
  inputpantalla.value = "0"
};
but1.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "1";
  }
};
but2.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "2";
  }
};
but3.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "3";
  }
};
but4.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "4";
  }
};
but5.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "5";
  }
};
but6.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "6";
  }
};
but7.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "7";
  }
};
but8.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "8";
  }
};
but9.onclick = function () {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = inputpantalla.value + "9";
  }
};

butpunto.onclick = function() {
  if (inputpantalla.value.length <= 12) {
    inputpantalla.value = ",";
  }
}

butC.onclick = function () {
  inputpantalla.value = ""
}

butE.onclick = function () {
  val1 = inputpantalla.value
  operacion = "e"
  inputpantalla.value = ""
}

butmas.onclick = function () {
  val1 = inputpantalla.value
  operacion = "+"
  inputpantalla.value = ""
}

butMenos.onclick = function(){
  val1 = inputpantalla.value
  operacion = "-"
  inputpantalla.value = ""
}

butAst.onclick = function(){
  val1 = inputpantalla.value
  operacion = "*"
  inputpantalla.value = ""
}

butslash.onclick = function(){
  val1 = inputpantalla.value
  operacion = "/"
  inputpantalla.value = ""
}

butIgual.onclick = function() {
  val2 = inputpantalla.value
  resolver();
}

reset = () => {
  inputpantalla.value = ""
  val1 = 0;
  val2 = 0;
  operacion = ""
}

resolver = () => {
  let total = 0;
  switch (operacion) {
    case "e":
      total = Math.pow(val1, val2)
      break;
    case "+":
      total = parseFloat(val1) + parseFloat(val2)
      break;
    case "-":
      total = parseFloat(val1) - parseFloat(val2)
      break;
    case "*":
      total = parseFloat(val1) * parseFloat(val2)
    case "/":
      total = parseFloat(val1) / parseFloat(val2)
  }
  reset();
  inputpantalla.value = total;
}


