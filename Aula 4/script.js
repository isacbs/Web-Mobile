// Crie uma função que receba 3 números e retornr a média ponderada dos mesmos.
function media (a,b,c) {
    return (a + b + c)/3
}

var resultado = media(8,9,10)
console.log(resultado)

// Crie uma função que receba 6 números (3 notas e 3 pesos) e retorne a média ponderada dos mesmos.

function mediaPond (a,b,c,p1,p2,p3) {
    return (a*p1+b*p2+c*p3)/(p1+p2+p3)
}

var resultado = mediaPond (8,9,10,0.5,0.3,0.2)
console.log(resultado)

// Crie uma função que receba uma string com valores 0 e 1, representando um binário e devolva o seu valor inteiro positivo.

function valor(binario) {
    let res = 0;
    let exp  = 1;
    for (let i = binario.length -1; i >= 0; i--){
        let num = parseInt(binario[i]);
        res += num * exp;
        exp *= 2;
    }
    return res;
    
}

let cont = "1001";
let resultadoBin = valor(cont);
console.log("O número binário para inteiro é:", resultadoBin);

// Crie um algoritmo que receba uma frase e a mostre na língua do P

function LinguaDoP(frase) {
    let termo = frase.split(" ");
    let fraseDoP = ""
    for (var i = 0; i < termo.length; i++){
        fraseDoP += "P" + termo[i] + " ";
    }
    return fraseDoP
}
  
let fraseNova = "Eu gosto do Mackenzie";
console.log(LinguaDoP(fraseNova));

// Faça um algoritmo que receba 3 strings e substitua na primeira, todas as ocorrências da segunda pela terceira.

function substituir(str1, str2, str3) {
    var result = ""
    for (var i = 0; i < str1.length; i++) {
        var parte = true
        for (var j = 0; j < str2.length; j++) {
            if (str1[i+j] != str2[j]) {
                parte = false
                break;
            }
        }
        if (parte == true) {
            result += str3;
            i += str2.length - 1
        } else{
            result += str1[i];
        }
    }
    return result
}
var str1 = "Eu gosto de CSS";
var str2 = "CSS";
var str3 = "HTML";
var rest = substituir(str1, str2, str3)
console.log(rest);

// Escreva um algoritmo que receba uma string com os números de um CPF e retorne se ele é válido ou não.

function validar(cpf) {
    const n1 = parseInt(cpf[0]);
    const n2 = parseInt(cpf[1]);
    const n3 = parseInt(cpf[2]);
    const n4 = parseInt(cpf[4]);
    const n5 = parseInt(cpf[5]);
    const n6 = parseInt(cpf[6]);
    const n7 = parseInt(cpf[8]);
    const n8 = parseInt(cpf[9]);
    const n9 = parseInt(cpf[10]);
    const n10 = parseInt(cpf[12]);
    const n11 = parseInt(cpf[13]);

    if (n1 === n2 && n2 === n3 && n3 === n4 && n4 === n5 && n5 === n6 && n6 === n7 && n7 === n8 && n8 === n9 && n9 === n10 && n10 === n11) {
        return false;
    } else {
        let soma1 = n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
        let resto1 = (soma1 * 10) % 11;

        if (resto1 === 10) {
            resto1 = 0;
        }

        let soma2 = n1 * 11 + n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + n10 * 2;
        let resto2 = (soma2 * 10) % 11;

        if (resto2 === 10) {
            resto2 = 0;
        }

        if (resto1 === n10 && resto2 === n11) {
            return true;
        } else {
            return false;
        }
    }
}

let cpf = "123.456.789-12";
if (validar(cpf)) {
    console.log("O CPF " + cpf + " é válido");
} else {
    console.log("O CPF " + cpf + " é inválido");
}

cpf = "529.982.247-25";
if (validar(cpf)) {
    console.log("O CPF " + cpf + " é válido");
} else {
    console.log("O CPF " + cpf + " é inválido");
}
