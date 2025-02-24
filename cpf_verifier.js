//const prompt = require('prompt-sync')();


//let cpfTotal = console.log("")



function Calculo(contador, cpfSeparado){
    let soma = 0;

    for (let i = contador; i > 1; i--) {
        soma += cpfSeparado[contador-i] * i
    }
    // console.log(soma1)
    let resultado1 = soma % 11
    if (resultado1 < 2 && cpfSeparado[contador-1] != 0 || resultado1 > 2 && cpfSeparado[contador-1] != (11 - resultado1)) {
            return false    
    }
    return true
}


function main() {
    let cpf = "090.851.019-16";
    let cpfTotal = cpf.replaceAll('.', '').replaceAll('-', '');

    if (cpfTotal.length != 11) {
        return 'CPF inválido, necessário 11 numeros'
    } 

    else {
        let cpfSeparado = cpfTotal.split('').map(Number);

        let validez = Calculo(10, cpfSeparado);
        let validez2 = Calculo(11, cpfSeparado);

        if (!validez) {
            console.log("CPF INVÁLIDO")
            return 'CPF INVÁLIDO'
        }else if (!validez2) {
            console.log("CPF INVÁLIDO")
            return 'CPF INVÁLIDO'
        }else{
            console.log("CPF VÁLIDO")
            return 'CPF VÁLIDO'
            
        }
    }
}
main();
