console.log("Trabalhando com atribuição de variáveis");

//Valor atribuído a const não pode ser alterado.
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//Para trabalhar com contador, é ideal é utilizar let, para a criação de uma variável.
let contador = 0;
contador = contador +1;

//console.log(nome + " " + sobrenome)
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade+1;
console.log(idade);
