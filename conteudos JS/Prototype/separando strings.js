console.log(`separando strings`)
//Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto a onde eram os espaços, coloque .
let phrase = "one piece is real"
let MyArray =phrase.split(" ")
console.log(MyArray)
let phraseWithUndescore = MyArray.join("_")
console.log(phraseWithUndescore.toLocaleUpperCase())