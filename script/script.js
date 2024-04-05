let frutas = document.querySelectorAll(".fruta");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

frutas.forEach(function (botao) {
  botao.addEventListener("click", function () {
    header.style.color = "white";
    footer.style.color = "white";

    switch (botao.innerText) {
      case "🍌":
        document.body.style.backgroundColor = "#f1c329";
        header.style.color = "black";
        footer.style.color = "black";
        break;

      case "🍈":
        document.body.style.backgroundColor = "#a9d399";
        header.style.color = "black";
        footer.style.color = "black";
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

      case "🥑":
        document.body.style.backgroundColor = "#059a23";
        break;

      default:
        alert("[ERRO] porfavor tente novamente.");
    }
  });
});
