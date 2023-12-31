let frutas = document.querySelectorAll(".fruta");

frutas.forEach(function (botao) {
    botao.addEventListener("click", function () {

        let corBotao = document.querySelector(".cor");

        switch (botao.innerText) {
            case "🍌":
                corBotao.style.background = "#FBCD63";
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
                corBotao.style.background = "#DC320F";
                break;

            case "🍐":
                corBotao.style.background = "#CBE042";
                break;
                
                    default:
                
                console.log("Botão não reconhecido:", botao.innerText);
        }

    });
});