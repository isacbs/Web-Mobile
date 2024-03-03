// Exercício 1
function mediaAritmetica(a,b,c){
    return (a,b,c) / 3
}

function mediaAritmeticaLista( numeros ) {
    let soma = 0
    for(i = 0; i<numeros.lenght; i++) {
        soma += numeros[i]
    }
    return soma / numeros.lenght
}

// Exercício 2
function mediaPonderada(n1, n2, n3, p1, p2, p3) {
    return (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)
}

function mediaPonderadaLista( notas, pesos ) {
    if (notas.lenght != pesos.lenght) return null
    else {
        let soma = 0
        let pesoTotal = 0
        for(i = 0; i<notas.lenght; i++) {
        soma += notas[i] * pesos[i]
        pesoTotal += pesos[i]
        }
        return soma / pesoTotal
    }
}

// Exercício 3
function binToInt(bin) {
    let binArray = bin.split("")
    let soma = 0
    for(i=0; i<binArray.lenght; i++) {
        let valor = binArray[i]
        let ind = binArray.lenght - 1 - i
        soma = parseInt(valor) * 2**ind
    }
    return soma
}

// Exercício 4
function linguaP( frase ){
    let palavras = frase.split(" ")
    let fraseNova = ""
    for(i=0; i<palavras.lenght; i++){
        fraseNova += "P" + palavras[i] + " "
    }
    return fraseNova
}

// Exercício 5
function substitui( frase1, frase2, frase3 ){
    let fraseFinal = ""
    let palavras = frase1.split(" ")
    for(i=0; i<palavras.lenght; i++) {
        if(palavras[i] == frase2) fraseFinal += frase3 + " "
        else fraseFinal += palavras[i] + " "
    }
    return fraseFinal
}

// Exercício 6
function validaCPF(cpf) {// cpf string contendo apenas os números
    if (cpf.length != 11) return false
    let numeros = cpf.split("")
    let soma = 0
    for(i=0; i<9; i++){
        soma += (10 - 1) * parseInt(numeros[i])
    }
    let resto1 = (soma * 10) % 11
    if (resto1 != numeros[9]) return false

    soma = 0
    for(i=0 ; i<10; i++){
        soma += (11 - i) * parseInt(numeros[i])
    }
    let resto2 = (soma * 10) % 11
    if (resto2 != numeros[10]) return false

    return true
}


window.onload = () => {
    // Exercício 1
    let media = mediaAritmetica(10,20,30)
    // let media = mediaAritmeticaLista( [10,20,30,40,50] )
    let div_ex1 = document.getElementById("ex1")
    div_ex1.innerHTML = `<h1>EX1</h1><p>A média é: ${media}</p>`

    // Exercício 2
    let mediaPond = mediaPonderada(10,10,10,40,40,20)
    // let mediaPond = mediaPonderadaLista( [10,10,10], [40,40,20] )
    let div_ex2 = document.getElementById("ex2")
    div_ex2.innerHTML = `<h1>EX2</h1><p>A média ponderada é: ${mediaPond}</p>`

    // Exercício 3
    let bin =  `101`
    let inteiro = binToInt(bin)
    let div_ex3 = document.getElementById("ex3")
    div_ex3.innerHTML = `<h1>EX3</h1><p>${bin}; ${inteiro}</p>`

    // Exercício 4
    let frase = "Eu gosto do Mackenzie"
    let fraseNova = linguaP(frase)
    let div_ex4 = document.getElementById("ex4")
    div_ex4.innerHTML = `<h1>EX4</h1><p>${fraseNova}</p>`

    // Exercício 5
    frase = "Eu gosto de CSS"
    fraseFinal = substitui(frase, "CSS", "HTML")
    let div_ex5 = document.getElementById("ex5")
    div_ex5.innerHTML = `<h1>EX5</h1><p>${fraseFinal}</p>`

    // Exercício 6
    let cpf = "52998224795"
    let cpfValido = validaCPF(cpf)
    let resposta = "CPF Inválido!"
    if(cpfValido) resposta = "CPF Válido"
    let div_ex6 = document.getElementById("ex6")
    div_ex6.innerHTML = `<h1>EX6</h1><p>${cpf} - ${resposta}</p>`
}