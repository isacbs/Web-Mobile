// Comentário de Linha

/*
    Comentário
    de 
    Bloco
*/

function soma(a,b) {
    return a + b
}

const subtrai = (a, b) => {
    return a - b
}

const multiplica = (a, b) => {
    return a * b
}

const dividir = (a, b) => {
    return a/b
}

// 

var resultado = soma(2, 3)
console.log(resultado)

resultado =  subtrai(10, 3)
console.log(resultado)

resultado = multiplica(4, 5)
console.log(resultado)

resultado = dividir(50, 5)
console.log(resultado)

resultado = soma( subtrai(10,4), 2 )
console.log(resultado)



let frequencia = 78
if (frequencia >= 75) {
    console.log("Frequência normal")
} else {
    console.log("Frequência abaixo do normal")
}

//if animado
let nota = 8.6
if (nota < 6){
    console.log("Não Aprovado")
} else if (nota >= 6 && nota < 7.5) {
    console.log("Sub")
} else {
    console.log("Aprovado")
}

//++ é um incremento que soma mais 1 ao valor do i e for é uma estrutura de repetição contável
console.log("For")
for (var i=0; i<10; i++){
    console.log(i)
}

console.log("While")
var a = 0
while(a < 10){
    console.log(a)
    a++
}

console.log("Do while")
var a = 0
do {
    console.log(a)
    a++
} while(a < 10)

var op = 1
switch(op) {
    case 1:
        console.log("Acabar a aula")
        break
    case 2:
        console.log("Continuar a aula")
        break
    default:
        console.log("Selecione 1 ou 2")
}