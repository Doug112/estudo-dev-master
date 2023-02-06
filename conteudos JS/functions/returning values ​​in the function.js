console.log("returning values ​​in the function - Retornando valores dentro da function")

let total = 0

const sum= function(number1, number2) {
//É possivel criar variaveis porém é pouco recomendado pois pode causar problemas no futuro 
let total = number1+number2
//Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
return total
}

let number11 = 66
let number22 = 55
console.log(`o numero 1 é o ${number11}`)

console.log(`o numero 2 é o ${number22}`)

console.log(`a soma de é ${sum(number11, number22)}`)
 console.log(total)


