function edit () {
    const edita = document.querySelector('#txte')
    if (edita.getAttribute('style') =='display:none'){
        edita.setAttribute ('style','display:flex')
    }else{
        edita.setAttribute ('style','display:none') 
    }
}

var campo = true
function visualizar() {
    const ver = document.querySelector('#txte').value
    
    if (campo){
        const mostrar = document.querySelector('#mostrar')
        mostrar.innerHTML = `<p>${ver}</p>`
    }else {
        mostrar.innerHTML = ``
    }
    campo = !campo
}

function salvar() {
    let salva = document.querySelector('#txte').value
    let conteiner = document.querySelector('#container3')
    conteiner.setAttribute('id','container2')
}

function excluir() { 
    (document.querySelector('#txte').value = '')
    window.location.replace('Checklist.html')
}

function copiar() {
    let resposta3 = document.querySelector("#resposta3").cloneNode(true)
    document.querySelector('#icon3').appendChild(resposta3)
    resposta3.setAttribute("style", "display: flex")
}

function copipag() {
    let divisao = document.querySelector("#divisao").cloneNode(true)
    document.querySelector('#caixa5').appendChild(divisao)

}

const divisao1 = document.getElementById('divisao')
console.log(divisao1)

const divisao= document.getElementById('divisao')
divisao.setAttribute('id', '1')
console.log(divisao)