let mainContainer = document.createElement("main");
    mainContainer.classList.add("mainContainer");
      document.body.appendChild(mainContainer);

let containerDiv = document.createElement("div");
    containerDiv.classList.add("containerDiv");

let btnForImg = document.createElement("button");
    btnForImg.classList.add("btnForCall");
    btnForImg.innerText = "Get Random Coin Image";
    btnForImg.type = "image";
      mainContainer.appendChild(btnForImg);

let btnForTxt = document.createElement("button");
    btnForTxt.classList.add("btnForCall");
    btnForTxt.innerText = "Get Random Coin Text";
    btnForTxt.type = "text";
      mainContainer.appendChild(btnForTxt);

let textResults = document.createElement("span");
    textResults.classList.add("textResults");
      
let loopNumber = 20;

const coin = {
    state: 0,  
     // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
        return this.state;
    },
    // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    toString: function () {
        let randomState = coin.flip();

        if (randomState === 0) {
          return "Heads";
        }
      return "Tails";
    },
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
    toHTML: function () {
      const image = document.createElement("img");

        if (this.toString() === "Heads") {
          // let image = document.createElement("img");
              image.src = "../images/luigiSide.png";
              image.classList.add("luigiHeads");
              containerDiv.appendChild(image);
        }
        else {
          // let image = document.createElement("img");
              image.src = "../images/marioSide.png";
              image.classList.add("marioTails");
                containerDiv.appendChild(image);
        }
    },
  };

  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  function display20Flips() {
    const results = [];
    
    for (let i = 0; i < loopNumber; i++) {
      results.push(coin.toString());
    }

    let resultsTxt = results.join(", ");
    textResults.innerText = resultsTxt;
      containerDiv.appendChild(textResults);
      mainContainer.appendChild(containerDiv);
    console.log(results);
    return results;
  }


   // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  function display20Images() {
    const results = [];
    
    for (let i = 0; i < loopNumber; i++) {
      results.push(coin.toHTML());
    }

    mainContainer.appendChild(containerDiv);
    console.log(results);
    return results;
  }

  btnForTxt.addEventListener("click", display20Flips, false);
  btnForImg.addEventListener("click", display20Images, false);

