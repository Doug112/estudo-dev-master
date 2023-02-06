console.log(`sistemas de notas escolares(minha forma de fazer )`)
/*Crie um algoritmo que transforme as notas do sistemanumérico para sistema de notas em caracteres tipo A B C*
de 90 para cima -   A* 
entre 80 - 89   -   B*
entre 70 - 79   -   C*
entre 60 - 69   -   D*
menor que 60    -   F*/





function score (result) {
if (result >=90 && result <=100) {
    console.log('A')
}
 else if (result >=80 && result <=89.9){
    console.log('B')
}
else if(result >=70 && result <=79.9) {
    console.log('C')
}
else if (result>=60 && result <=69.9) {
    console.log('D')
}
else if (result <=59.9){
    console.log('F')

}else if(result>100){
    console.log('false')
}
return
}

score(82)