//AULA 9 REVISÃO
//variaveis, write e concatenação
var nome = window.prompt('Qual o seu nome ?') // var guarda o nome
document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras <br>`)//concatenação 
//document.write escreve, o placeholder precisa ser em crase
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()} <br>`)
document.write(`Seu nome em minúsculo é ${nome.toUpperCase()} <br>`)

//função somar
function somar() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = document.getElementById('res');
    num1 = Number.parseInt(num1)
    num2 = Number.parseInt(num2)
    resu = num1 + num2
    resultado.innerHTML = (`O resultado da soma entre ${num1} + ${num2} é igual a: ${resu}`)
}