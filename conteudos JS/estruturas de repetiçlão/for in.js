console.log(`for if`)
/* cria um looping em cima das propriedades do objeto  */ 
let person= {
    name: 'Jhon',
    age:40,
    weight:75
}

for (let propety in person) {
 console.log(propety)   
 console.log(person[propety])
}

