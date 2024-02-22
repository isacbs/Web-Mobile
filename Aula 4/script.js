// Crie uma função que receba 3 números e retornr a média ponderada deles
function media (a,b,c) {
    return (a + b + c)/3
}

var resultado = media(8,9,10)
console.log(resultado)

// Crie uma função que receba 6 números (3 notas e 3 pesos). Retorne a média ponderada

function mediaPond (a,b,c,p1,p2,p3) {
    return (a*p1+b*p2+c*p3)/(p1+p2+p3)
}

var resultado = mediaPond (8,9,10,0.5,0.3,0.2)
console.log(resultado)

// Transformar binário em um valor inteiro positivo 



// Crie uma frase e a transforme na linguagem do P



// Substitua uma frase

function substituir(frase1,frase2,frase3) {
    return frase1.split(frase2).join(frase3)
}

let frase1 = "Eu gosto de CSS"
let frase2 = "CSS"
let frase3 = "HTML"

let result = substituir(frase1,frase2,frase3)
console.log(result)

// Desafio