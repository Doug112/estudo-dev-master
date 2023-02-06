console.log(`Funçoes construtoras`)

function Person(name) {
this.name = name
this.walk = function() {
  return this.name + " está andando"
}
}
let name = new Date ("2020-12-5")
const Joao = new Person ("joao")
console.log(name)
console.log(Joao.walk())

