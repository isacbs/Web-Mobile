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

function binaryToInteger(binaryString) {
    let result = 0;
    let exponent = binaryString.length - 1;
    for (let i = 0; i < binaryString.length; i++) {
      result += parseInt(binaryString[i]) * (2 ** exponent);
      exponent--;
    }
    return result;
  }  

// Crie um algoritmo que receba uma frase e a mostre na língua do P



// Substitua uma frase

function substituir(str1, str2, str3) {
    return str1.replace(str2,str3)
}

console.log(substituir("Eu gosto de CSS","CSS", "HTML"));

// Desafio
