var randomNumber1 = 0; 
var randomNumber2 = 0;

const main = async () => {
    for (var i = 100; i <= 1000; i+=500){
    randomNumber1 = Math.floor(Math.random() * 6) + 1
    randomNumber2 = Math.floor(Math.random() * 6) + 1
    

    const imagensDado = ["images/dice1.png","images/dice2.png", "images/dice3.png",
    "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    
    var imagemAleatoria = imagensDado[randomNumber1 -1]
    var imagemAleatoria2 = imagensDado[randomNumber2 -1]

    document.querySelector(".img1").setAttribute("src", imagemAleatoria)
    document.querySelector(".img2").setAttribute("src", imagemAleatoria2)
    console.log(i,randomNumber1,randomNumber2)
    document.querySelector("h1").hidden = true;
    document.querySelector(".imagemDado").hidden = false;
    
    await sleep(i);
}
    
    if (randomNumber2 < randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 1 Wins"
        document.querySelector("h1").hidden = false;
        document.querySelector(".imagemDado").hidden = true;
        document.querySelector(".imagemMeme").setAttribute("src", href="images/esquerda.gif");
        return
    } 
    if (randomNumber2 === randomNumber1) {
        document.querySelector("h1").innerHTML = "Draw"
        document.querySelector("h1").hidden = false;
        document.querySelector(".imagemDado").hidden = true;
        document.querySelector(".imagemMeme").setAttribute("src", href="images/draw.gif");
        return
    }
        
    document.querySelector("h1").innerHTML = "Player 2 Wins"
    document.querySelector("h1").hidden = false;
    document.querySelector(".imagemDado").hidden = true;
    document.querySelector(".imagemMeme").setAttribute("src", href="images/direita.gif");
}

          
    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   
    }
  
      main();
  