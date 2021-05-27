var altura = 0;
var largura = 0;

function ajustaTamanhoTelaJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustaTamanhoTelaJogo();


function posicaoRandomica(){
    var x = Math.floor(Math.random() * largura) - 90;
    var y = Math.floor(Math.random() * altura) - 90;

    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    console.log(x, y)

    var mosquito = document.createElement('img');
        mosquito.src = 'imagens/mosquito.png';
        mosquito.className = tamanhoAleatorio();
        mosquito.style.left = x + 'px';
        mosquito.style.top = y + 'px';
        mosquito.style.position = 'absolute';

        document.body.appendChild(mosquito);

        console.log(tamanhoAleatorio());
}


function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}






