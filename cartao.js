//Frase do Autor:
//  "Posso travar na hora de codar, mas se acontecer eu admito"

//Vou admitir, esse código foi um grande Frankstein de códigos de IA, porém
//eu estou analisando e tentando concertar eu mesmo antes de pedir ajuda a IA. 

function Calculo(numeroCartao) {
    for (let i = numeroCartao.length - 2; i >= 0; i -= 2) {
        numeroCartao[i] *= 2;

        //Isso aqui é para poder seguir a conta e não precisar
        //separar alguns elementos de 2 digitos em elementos de 1
        //digito
        if (numeroCartao[i] > 9) {
            numeroCartao[i] = numeroCartao[i] - 9;
        }
    }
    //travei na "codificação" do algoritmo de Luhm, tem dedo de IA Aqui
    let soma = numeroCartao.reduce((acc, curr) => acc + curr, 0);

    return soma % 10 === 0;
}


function main() {
    // let numeroCartao = prompt("Numero de cartão: ")
    let numeroCartao = "5148 1500 1379 8819"
    numeroCartao = numeroCartao.replaceAll(' ', '').split('').map(Number);

    if (numeroCartao.length != 16) {
        console.log("Número inválido, mínimo 16 numeros")
        return 'Número inválido, mínimo 16 numeros'
    }

    let validez = Calculo(numeroCartao);
    console.log(`Seu cartão tem uma validez ${validez}`);

} main();
