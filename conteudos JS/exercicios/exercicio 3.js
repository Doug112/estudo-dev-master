console.log(`(minha forma de fazer )`)
/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/ 

//transformdegree('50F')
function transformdegree(degree) {
   const  celsiusExists = degree.toUpperCase().includes('C')
   const fahrenheitExists = degree.toUpperCase().includes('F')
   if (!celsiusExists && !fahrenheitExists) {
    throw new Error(`grau não identificado!`)
   }
   //fluxo ideal F -> C
   let updatedDegree= Number(degree.toUpperCase().replace("F", ""));
   let formula =fahrenheit => (fahrenheit - 32) * 5/9 
   let degreesings = 'C'

//fluxo alternativo C -> F


 if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) =>  celsius * 9/5 + 32;
    degreesings = 'F'
    
 }
 

return formula (updatedDegree) + degreesings

}
try{
    console.log(transformdegree('50F'))
    console.log(transformdegree('10c'))
    transformdegree('50Z')
} catch (error) {
    console.log(error.message)

}
