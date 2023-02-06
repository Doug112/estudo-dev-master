//const element = document.querySelector('body');

//MANIPULANDO O CONTEUDO
//element.textContent= 'Hello World!';
//element.innerText= 'Hello World!';
//element.innerHTML= 'Hello World! <small>??</small> ';


//value
//console.log(element.value);
//element.value= 'Hello World!';

/*let h2 = document.querySelector('h2')

//MANIPULANDO ATRIBUTOS
element.setAttribute('id', 'header');
const headerId = document.querySelector('#header');
console.log(headerId.getAttribute('id'));

h2.removeAttribute('class')*/


//MANIPULANDO ESTILOS E CLASSES 
/*element.style.backgroundColor = "red"
console.log(element.style.backgroundColor)*/

/*console.log(element.classList);

element.classList.add('active', 'green');
element.classList.remove('green');
element.classList.toggle('green');*/

//navegando pelo elemento
//parenteElement parenetnode

/*pegando elementosf ilhos*/

// childNode(element) chilDre(html colection)

//console.log(element.children)

//firstChild firstElementChild

//lastChild lastElementChild

//nextSiblin nextElementSibling
//previusSiblin previousElementSibling

//criando e adicionando elementos html

//creatElemnet
//const div = document.createElement('div');

//div.innerText = 'Hello World!';
//append or prepend
//const body = document.querySelector('body');

//body.prepend(div)

//insertBefore
/*const div = document.createElement('div');

div.innerText = 'Hello World!';
const body = document.querySelector('body');
const script  = body.querySelector('script');

body.insertBefore(div, script);*/

//como fazer afterBefore 
/*const div = document.createElement('div');

div.innerText = 'Hello World!';
const body = document.querySelector('body');
const header  = body.querySelector('script');

body.insertBefore(div, header.nextSibling);*/


/*EVENTOS*/ 

/*function print () {
    console.log('print');
}*/
//EVENTOS DE TECLADO
/*const   input = document.querySelector('input');

input.onkeypress =function() {
    console.log('roda roda ')
}*/

//adcionando eventos via jS


/*const h1 = document.querySelector('h1');


h1.addEventListener('dblclick', ara)


function ara () {
    console.log('print');
}

const input = document.querySelector('input');

input.addEventListener('keyup', bbb)

function bbb () {
    console.log('tecla pressionada')

}*/

// ARGUMENTO EVENT
/*
const input = document.querySelector('input');
input.onkeydown = function (event) {
    console.log(event);

    
}*/
