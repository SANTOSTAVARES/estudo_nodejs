console.log(`Trabalhando com listas`);
const salvador = `Salvador`
const saoPaulo = `São Paulo`
const rioDeJaneiro = `Rio de janeiro`
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
    
)
console.log(listaDeDestinos)
listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("Destinos possíveis:")
console.log(listaDeDestinos)
console.log("Removendo um elemento do array:")
listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[2])
