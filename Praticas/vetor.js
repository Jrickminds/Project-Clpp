let valor = [8,1,7,5,2]
valor.sort()
console.log(valor)

/*for(let pos=0; pos< valor.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valor[pos]} `)
}*/

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor de ${valor[pos]} `)
}
