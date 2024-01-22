let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroAleatorio) {
        exibirTextoNaTela('p', `O Numero Secreto é menor`);
    } else {
        exibirTextoNaTela('p', `O Numero Secreto é maior`);
    }
    tentativas++;
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// // Aula 2

// //Variaveis utilizadas nos exercicios.
// let nome;
// let numero;
// let numero1;
// let numero2;
// let numero3;

// // Criar uma função que exibe "Olá, mundo!" no console.
// function primeiraMensagem() {
//     console.log('Olá mundo')
// }
// primeiraMensagem();
// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function mensagemBoasVindas(nome) {
//     console.log(`Olá, ${nome}!`)
// }
// nome = prompt('Digite seu nome')
// mensagemBoasVindas(nome);
// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobroNumero(numero) {
//     resultado = numero * 2
//     console.log(resultado);
// }
// numero = parseInt(prompt('Digite um número'));
// dobroNumero(numero);
// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media(numero1, numero2, numero3) {
//     console.log((numero1 + numero2 + numero3) / 3)
// }
// numero1 = parseInt(prompt('Digite um número'));
// numero2 = parseInt(prompt('Digite o segundo número'));
// numero3 = parseInt(prompt('Digite o terceiro número'));
// media(numero1, numero2, numero3);
// // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function maiorNumero() {
//     if (numero1 > numero2) {
//         console.log(`O numero ${numero1} é maior que o ${numero2}`)
//     } else if (numero2 > numero1) {
//         console.log(`O numero ${numero2} é maior que o ${numero1}`)
//     } else {
//         console.log('Os numeros são os mesmos')
//     }
// }
// numero1 = parseInt(prompt('Digite um numero'))
// numero2 = parseInt(prompt('Digite outro numero'))
// maiorNumero(numero1, numero2);
// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function numeroElevadoDois() {
//     console.log(numero * numero);
// }
// numero = parseInt(prompt('Digite um número'));
// numeroElevadoDois(numero);

//Aula 3

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.