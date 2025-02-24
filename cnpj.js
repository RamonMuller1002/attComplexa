function tipo() {
    //1 é matriz, 2 + é sede
    //Devido a falta da função prompt no computador
    //está sendo utilizado randomizador para informar se seria 
    //uma matriz ou uma filial, para poder gerar alguns digitos
    let tipo = Math.floor(Math.random() * 2) + 1;

    if (tipo === 1) {
        return '0001'
    } else {
        return '0002'
    }
}


function gerarVerificador(contador, baseSeparada) {
    let soma = 0;
    let resultado;

    //"fator" teria que reiniciar em um ponto, por isso não
    //está sento utilizado direto no contador

    let fator = contador - 7;
    for (let i = 0; i < contador; i++) {
        if (fator == 1) {
            fator = 9;
        }

        soma += baseSeparada[i] * fator

        fator--;
    }
    let resultado1 = soma % 11
    if (resultado1 < 2) {
        resultado = 0
    } else {
        resultado = 11 - resultado1
    }
    return resultado;
}



function gerarBase() {
    let base = Math.floor(Math.random() * 100000000);
    //Na fução 'toString()' teve um participação da IA, não sabia como que poderia
    //criar qualquer numero que pudesse haver 8 digitos com 0's na frente.
    base = base.toString().padStart(8, '0');

    //Dentre o processo de criação do CNPJ, faz diferença se for
    //uma matriz ou uma filial, por isso a função tipo.
    let Filial_Matriz = tipo();
    base = base + Filial_Matriz

    let baseSeparada = base.split('').map(Number);

    let verificador1 = gerarVerificador(12, baseSeparada);
    baseSeparada.push(verificador1);
    let verificador2 = gerarVerificador(13, baseSeparada);
    baseSeparada.push(verificador2);

    let cnpj = baseSeparada.join('');

    console.log("Seu CNPJ completamente válido é '" + cnpj + "'")
}
gerarBase();