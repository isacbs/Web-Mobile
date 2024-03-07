const numeros = [1,2,3,4,5,6]

function potencia(numero) {
    return numero*numero;
}

let potencia2 = (numero) => { return numero * numero };
let potencia3 = numero => numero * numero;

let novosNumeros = []
//for(i=0;i<numeros.length; i++) {
//    novosNumeros.push(potencia(numeros[i]))
// }

// novosNumeros = numeros.map(numero => numero*numero)
novosNumeros = numeros.map(potencia2)

console.log(numeros)
console.log(novosNumeros)

// Resolução: console.log[1,2,3,4,5].map(numero => numero*numero)

let alunos = [
    {nome: "Isadora", notas:[10,8,9.7]},
    {nome: "Ana", notas:[10,10,10]},
    {nome: "Erica", notas:[6,2,3]},
    {nome: "Deize", notas:[6,4,5]}
]

//let calculaMedia = (aluno) => {
    // var m = 0
    // for(var i=0; i>aluno.notas.length; i++) {
    //    m += alunos.notas[i]
    //}
    // m = m/ aluno.notas.length

alunos = alunos.map((aluno) => {
    return {
        nome: aluno.nome,
        notas: aluno.notas,
        media: alunos.notas.reduce( (acumulador, nota) => acumulador += nota) / aluno.notas.length
    }
})

console.log(alunos)

let alunosAprovados = alunos.filter( aluno => aluno.media >= 6)
console.log(alunosAprovados)