console.log("Trabalhando com atribuicao de variaveis")

const gravidade = 2 * 3; //Nao muda nunca
let nome = "Luis"; //Muda o valor a vontade
const sobrenome = "Ribeiro";

console.log(nome, sobrenome);

nome += sobrenome;
console.log(nome);
nome -= sobrenome;
console.log(nome)

console.log(`Meu nome é ${nome} ${sobrenome} `)

sobrenome = "Souza";
console.log(sobrenome);// erro