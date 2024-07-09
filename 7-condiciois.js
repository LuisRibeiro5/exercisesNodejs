console.log(`Trabalhando com condicionais`);

const paises = new Array(`Brasil`, `Argentina`, `Colombia`, `Uruguai`);

const idade = 18;
const acompanhado = true
const passagemComprada = true

paises.push(`Chile`);
console.log(paises);

// if(idade >= 18){
//    console.log(`Maior de idade`)
//    paises.splice(1,2); 
// } else if(acompanhado){
//     console.log(`Esta acompanhado`)
//     paises.splice(1,2);
// } else {
//     console.log(`Menor de idade`);
// }

if(idade >= 18 || acompanhado){
   console.log(`Pode comprar`)
   paises.splice(1,2); 
} else {
    console.log(`Nao pode comprar`);
}

if(idade >= 18 && passagemComprada){
   console.log(`Boa Viagem`) 
}

console.log(paises);

console.log(idade > 18);
console.log(idade < 18);
console.log(idade >= 18);
console.log(idade <= 18);
console.log(idade == 18);