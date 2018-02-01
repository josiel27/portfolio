function Sprite(x, y, largura, altura) {
    this.x = x; this.y = y; this.largura = largura; this.altura = altura;
    this.desenha = function (xCanvas, yCanvas) {
        ctx.drawImage(spritesPerso, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

function Snake(x, y, largura, altura) {
    this.x = x; this.y = y; this.largura = largura; this.altura = altura;
    this.desenha = function (xCanvas, yCanvas) {
        ctx.drawImage(snakeFunc, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var spritepersonagem = new Sprite(0, 0, 135, 150 ),
    // var spritepersonagem = new Sprite(0, 0, 935, 800),
    snakeImg = new Snake(0, 0, 500, 500);

var canvas, ctx, ALTURA, LARGURA, spritesPerso, snakeFunc,
    personagem = {
        x: 0, y:  510, altura: spritepersonagem.altura, largura: spritepersonagem.largura, cor: "#0b0b0b", gravidade: 1.5, velocidade: 0, forcaDoPulo: 29, qtdPulos: 0, score: 0,
        desenha: function (xCanvas, yCanvas) {
            spritepersonagem.desenha(this.x, this.y);
        }
    },
    snake = {
        x: 10, y: 150, altura: snakeImg.altura, largura: snakeImg.largura,
        desenha: function (xCanvas, yCanvas) {
            snakeImg.desenha(this.x, this.y);
        }
    };

function start(evt) {

    personagem.desenha();
    // snake.desenha();
}
function main() {
    ALTURA = window.innerHeight
    LARGURA = window.innerWidth
    if (LARGURA >= 1000) {
        LARGURA = "900px";
        ALTURA = "700px";
    }
    canvas = document.createElement("canvas");
    canvas.style.width = LARGURA;
    canvas.style.height = ALTURA;
    canvas.width = 1600;
    canvas.height = 1100;
    ctx = canvas.getContext("2d");
    document.getElementById('divPrincipal').appendChild(canvas);
    document.addEventListener("mousedown", start);

    spritesPerso = new Image();
    spritesPerso.src = "img/personagem-sprites.png";
    snakeFunc = new Image();
    snakeFunc.src = "img/favicon.png";
}
main();//CHAMANDO FUNCAO MAIN


//variaveis para animacao do personagem
var movX = 0,
    movY = 0,
    alturaPerso = 1200,
    contAnima = 0,
    velAnima = 3,
    linha = 0;

function animaPersonagem() {
    contAnima++;
    linha++;
    spritepersonagem = new Sprite(movX, movY, 135, 150);
    switch (contAnima) {
        case velAnima * 1: moverX(); break;
        case velAnima * 2: moverX(); break;
        case velAnima * 3: moverX(); break;
        case velAnima * 4: moverX(); break;
        case velAnima * 5: moverX(); break;
        case velAnima * 6: moverX(); break;
        case velAnima * 7:
            moverX();
            contAnima = 0; 
            movX = 0; movY += 150;
            break;
    }
    requestAnimationFrame(animaPersonagem)
    if (linha == 63) { movY = 0; linha = 0; }; //teste de limite de sprites
}
animaPersonagem();//chamando funcao para mover o personagem

moverX = () => {
    ctx.clearRect(0, 150, alturaPerso, 600); movX += 130; personagem.desenha();
}

// funcao do teclado para quando pressionar a tecla
funcaoTecladoKeyDown = function (objEvent) {
    switch (objEvent.keyCode) {
        case 13: console.log('enter'); break;
        case 39: console.log("direita"); break;
        case 37: console.log("esque"); break;
        case 38: console.log("cima"); break;
        case 40: console.log("baixo"); break;
    }
};
//funcao do teclado para quando soltar a tecla
document.addEventListener('keydown', funcaoTecladoKeyDown);