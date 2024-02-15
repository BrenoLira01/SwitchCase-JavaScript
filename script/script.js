let frutas = document.querySelectorAll(".fruta");

frutas.forEach(function (botao) {
    botao.addEventListener("click", function () {

        let corBotao = document.querySelector(".cor");

        switch (botao.innerText) {
            case "🍌":
                corBotao.style.background = "#fccf3b";
                break;
                
            case "🍉":
                corBotao.style.background = "#F68574";
                break;

            case "🍇":
                corBotao.style.background = "#835AB8";
                break;

            case "🍊":
                corBotao.style.background = "#F8762A";
                break;

            case "🍓":
                corBotao.style.background = "#f22d2d";
                break;

            case "🥑":
                corBotao.style.background = "#25de29";
                break;
                
                    default:
                console.log("Botão não reconhecido:", botao.innerText);
        }
    });
});