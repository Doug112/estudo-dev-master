console.log(`Resumo e pratica `)
//Para declarar uma variável podemos usar var, let e const, e para atribuírmos valores à essa variável utilizamos o caractere =, e para vermos o tipo dessa variável podemos utilizar a função console.log(typeof variavel).
console.log(`variaveis e tipos de dados`)
//declaration
//var name

//assignment or atribuição de valores
//name=joão

// que tipo de dado foi colocado na variavel 

console.log (typeof name)

let age = 20
let isHuman = true

//multiplos argumentos na função
//console.log(age, isHuman, name )

//escrita de texto mais variaveis

//concatenando valores
//console.log("o " + name +" tem " +age+ " anos ")

//interpolando valores com template literals or template strings 
console.log(`o ${name} tem ${age} anos e é humano? ${isHuman} `)


console.log(`object`)


const person={
    name: 'Jhon',
    age: 20,
    profession:'doctor'  
}

console.log(person) 
console.log(person.name) 
console.log(person.age)
console.log(person.profession)  


//acessar valores dentro do array
const animals=[
    `lion`, `monkey`, 
    {
        name:"cat",
        age:1
    }
]
console.log(animals)
console.log(animals[0])
console.log(animals[2].name)




console.log(`Exercicio`)
var weigth
console.log(typeof wheigth)

let student={
name: "will",
age:20,
stars:2.5,
iasubscribed: true,
}
/*console.log(student)

let name=`will`
let age= 20
let stars= 2.5
let isSubscribed=true

/*console.log(name, age, stars, isSubscribed)


*/
let students =[]

//console.log(`${student.name} tem ${student.age} e pesa ${student.stars} kg` )

students=[
    {
    student
    }
]

console.log(students)
console.log(students[0])

const jhon ={
    name:JSON,
    age:25,
    stars:25.5
}
students=[
    students,
    jhon
]
console.log(students)