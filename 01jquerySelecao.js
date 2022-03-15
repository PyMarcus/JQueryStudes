// seletores jquery - obs: $ é o que faz referência ao jquery

//elementos por tag:
$('h1')
//elementos por classe:
$('.class')
//elementos por id:
$('#id')

// jquery é menor,pois abstrai a API do dom, ao contrário de js puro


// selecionando tags da pagina:
$('h1')

$('div') //2 divs

$('select')

$('.opcao1dooptiondoselect') // seletor de classe

$('#select') // selecao de id


// selecionar elementos de classe por tag específica:
console.log("JQUERY: " + $('h1.class'));

// selecionar elementos como ul (class A) e li (class b)
console.log("JQUERY: " + $('.A li.yo'));


//selecionar pela posicao do array de retorno:
$('li.yo:first') //primeiro
$('li.yo:last') //ultimo
$('li.yo:even') //pares
$('li.yo:odd') //ímpares
