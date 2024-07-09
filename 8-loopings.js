console.log(`Trabalhando com loopings`);

const paises = new Array(`Brasil`, `Argentina`, `Colombia`, `Uruguai`);

const idade = 18;
const acompanhado = true
let passagemComprada = false
const destino = paises[0]
const podeComprar = idade >= 18 || acompanhado
let destinoDisponivel = false;
for(let i of paises ){
    if(i == destino){
        console.log(`Destine available`)
        destinoDisponivel = true;
        break;
    }
}

if(podeComprar && destinoDisponivel){
    console.log(`Pode comprar`)
    paises.splice(1,2); 
    passagemComprada = true;
 } else {
    console.log(`Nao pode comprar`);
 }
 
 if(passagemComprada){
    console.log(`Boa Viagem`)
 }
