let visor = document.querySelector("#display");
let botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    visor.value += botao.textContent;
  });
});

function clearDisplay() {
  visor.value = "";
}

function backspace() {
  visor.value = visor.value.substr(0, visor.value.length - 1);
}

function result(param, num1, num2) {
  switch (param) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
  }
}
