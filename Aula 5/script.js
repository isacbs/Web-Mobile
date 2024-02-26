let disciplina1 = {
    nome: "Web Mobile",
    professor: {
        nome: "Pedro Cacique",
        email: "pedro.cacique@mackenzie.br"
    },
    local: {
        predio: 33,
        sala: 102
    }
}

let disciplina2 = {
    nome: "Fundamentos da Matemática",
    professor: {
        nome: "Angela",
        email: "angela@mackenzie.br"
    },
    local: {
        predio: 25,
        sala: 302
    }
}

mostra(disciplina1)
mostra(disciplina2)


function mostra(disciplina) {
    let conteudo = document.getElementById("conteudo")
    //conteudo.innerHTML = "<h1>" {disciplina..nome} "</h1>"
    //conteudo.innerHTML ="<h1>" + disciplina.nome + "</h1>"
    let str =`<div><h1> ${disciplina.nome}  </div></h1>`
    str += `<p>${disciplina.professor.nome} (<em>${disciplina.local.sala}</em>)</p>`
    str +=`<p>Local:Prédio:${disciplina.local.predio}, sala ${disciplina.local.sala}</p>`
    str +="</div>"
    conteudo.innerHTML += str
}
