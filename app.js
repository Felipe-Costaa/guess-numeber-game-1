alert('Boas vindas ao jogo do numero secreto');
let numeroScreto = parseInt(Math.random()*100 + 1);
let chute 
let tentativas = 1;

while(chute != numeroScreto){
    chute = prompt('Escolha um numeor entre 1 e 100');
    // se o chute for igual ao numero secreto
if (numeroScreto == chute){
    break;
} else{
    if(numeroScreto > chute){
        alert(`O numero secreto é maior que o ${chute}`)
    }else{
    alert(`O numero secreto é menor que o ${chute}`)
    }
    tentativas++;
}
}

let concordanciaTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o numero secreto ${numeroScreto} com ${tentativas} ${concordanciaTentativa}`);
