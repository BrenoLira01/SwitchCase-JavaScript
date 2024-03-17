const frutas = document.querySelectorAll(".fruta");

frutas.forEach(function (botao) {
  botao.addEventListener("click", function () {
    document.querySelector("header").style.color = "white";
    document.querySelector("footer").style.color = "white";
    switch (botao.innerText) {
      case "🍌":
        document.body.style.backgroundColor = "#f1c329";
        break;

      case "🍉":
        document.body.style.backgroundColor = "#F68574";
        break;

      case "🍇":
        document.body.style.backgroundColor = "#835AB8";
        break;

      case "🍊":
        document.body.style.backgroundColor = "#F8762A";
        break;

      case "🍓":
        document.body.style.backgroundColor = "#f22d2d";
        break;

      case "🥑":
        document.body.style.backgroundColor = "#24d147";
        break;

      default:
        console.log("Botão não reconhecido:", botao.innerText);
    }
  });
});
