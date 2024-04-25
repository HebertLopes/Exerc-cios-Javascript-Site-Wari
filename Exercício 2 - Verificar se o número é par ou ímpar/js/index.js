function verificar(){
    var txtn = window.document.getElementById('txtnum')
    var res = window.document.querySelector('div#resultado')
    var numero = Number(txtn.value)
        if(numero % 2 == 0){
            res.innerHTML = `O número ${numero} é um número par.`
        }else{
            res.innerHTML = `O número ${numero} é um número ímpar.`
        }
}