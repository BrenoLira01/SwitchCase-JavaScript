const frutas = document.querySelectorAll(".fruta");

frutas.forEach(function (botao) {
  botao.addEventListener("click", function () {
    document.querySelector("header").style.color = "white";
    document.querySelector("footer").style.color = "white";
    switch (botao.innerText) {
      case "🍌":
        document.body.style.backgroundColor = "#f1c329";
        document.querySelector("header").style.color = "black";
        document.querySelector("footer").style.color = "black";
        break;

      case "🍉":
        document.body.style.backgroundColor = "#f22d2d";
        break;

      case "🍇":
        document.body.style.backgroundColor = "#835AB8";
        break;

      case "🍊":
        document.body.style.backgroundColor = "#F8762A";
        break;

      case "🍈":
        document.body.style.backgroundColor = "#a9d399";
        document.querySelector("header").style.color = "black";
        document.querySelector("footer").style.color = "black";
        break;

      case "🥑":
        document.body.style.backgroundColor = "#059a23";
        break;

      default:
        console.log("Botão não reconhecido:", botao.innerText);
    }
  });
});
