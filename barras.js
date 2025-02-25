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
    
    let pais = codigoSeparado.slice(0,3).join('')
    copiaCodigo = copiaCodigo.slice(3)

    let fabricante = codigoSeparado.slice(3,7).join('')
    copiaCodigo = copiaCodigo.slice(4)

    let digitoVerificacao = codigoSeparado[(codigoSeparado.length - 1)]
    copiaCodigo = copiaCodigo.slice(0, -1)
    copiaCodigo = copiaCodigo.join('')
    
    const EAN = {
        pais : pais,
        fabricante : fabricante, 
        digitoVerificacao : digitoVerificacao, 
        codigoProduto : copiaCodigo
    }

    return EAN
}


function main(){
    // let codigo = prompt("Digite o codigo de barras: ")
    

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