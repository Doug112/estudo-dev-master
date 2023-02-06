console.log(`(minha forma de fazer )`)
/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/ 
let family = {
icomens: [5000],
expenses:[3000]
}

function sum(array) {
let total = 0;

for (let value of array)
total += value
    return total 

}

function saldofamiliar() {
const cauculoincomes = sum(family.icomens)
const calculoexpenses = sum (family.expenses)
const total = cauculoincomes-calculoexpenses
const positivo= total >=0;
let mensagemDeSaldo = "negativo"
if (positivo){
mensagemDeSaldo="positivo"
}
console.log(`seu saldo é ${mensagemDeSaldo} ${total.toFixed(2)} R$`)
}
saldofamiliar()