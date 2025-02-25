const tabelaPaises = {
    "789": "Brasil",
    "000": "EUA e Canadá",
    "380": "Bulgária",
    "383": "Eslovênia",
    "385": "Croácia",
    "387": "Bósnia-Herzegovina",
    "400": "Alemanha",
    "460": "Rússia",
    "471": "Taiwan",
    "474": "Estônia",
    "475": "Letônia",
    "477": "Lituânia",
    "479": "Sri Lanka",
    "480": "Filipinas",
    "482": "Ucrânia",
    "484": "Moldávia",
    "485": "Armênia",
    "486": "Geórgia",
    "487": "Cazaquistão",
    "489": "Hong Kong",
    "490": "Japão"
};


function Calculo(codigoSeparado){
    let soma = 0
    for(let i = 0 ; i < (codigoSeparado.length - 1); i++){
        if(i % 2 !=0){
            soma += codigoSeparado[i] * 1;
        }else{
            soma += codigoSeparado[i] * 3;
        }
    }

    let resultado = (10 - (soma % 10)) % 10;
    
    if(parseInt(codigoSeparado[(codigoSeparado.length + 1)]) != resultado){
        return false
    }
    return true;
}

function separarInfo(codigoSeparado){
    let copiaCodigo = [...codigoSeparado];
    
    let paisCodigo = codigoSeparado.slice(0,3).join('')
    copiaCodigo = copiaCodigo.slice(3)

let nomePais = tabelaPaises[paisCodigo] || "Desconhecido";

    let fabricante = codigoSeparado.slice(3,7).join('')
    copiaCodigo = copiaCodigo.slice(4)

    let digitoVerificacao = codigoSeparado[(codigoSeparado.length - 1)]
    copiaCodigo = copiaCodigo.slice(0, -1)
    copiaCodigo = copiaCodigo.join('')
    
    const EAN = {
        pais : nomePais,
        fabricante : fabricante, 
        digitoVerificacao : digitoVerificacao, 
        codigoProduto : copiaCodigo
    }

    return EAN
}


function main(){
    // let codigo = prompt("Digite o codigo de barras: ")
    
//Por falta do prompt, foi posto um EAN fixo de testes
    let codigo = "7894326682575"
    
    if(codigo.length != 13){
        return 'Codigo deve ter 13 numeros'
    }
    let codigoSeparado = codigo.split('').map(Number);

    let validez = Calculo(codigoSeparado)
    console.log(validez)
    
    const EAN = separarInfo(codigoSeparado);

    console.log(`Informações de EAN: 
        País: ${EAN.pais}
        Fabricante: ${EAN.fabricante}
        Codigo do produto: ${EAN.codigoProduto}
        Digito de verificação ${EAN.digitoVerificacao}`);

}main();