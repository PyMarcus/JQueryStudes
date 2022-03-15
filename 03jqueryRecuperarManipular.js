
// execução após carregar todo o dom
$(document).ready(()=>{

    //acessando valores
    console.log($('img').attr('src'))
    console.log($('img').attr('alt'))

    //modificando os valores:
    $('img').attr('width', 500)  //atributo, valor

    $('div.opa').attr('style', 'background-color: blue;width: 300px; height: 200px;')

    $('input').attr('placeholder', 'ok');
    $('input').attr('type', 'password');

    //pegar conteúdo interno
    console.log($('div.opa').html());

    //alterando o conteudo interno:
    $('div.opa').html('<img src="img/imagens/esfera_1.png" width="222px">');

    //inserindo texto:
    $('div.opa').text('texto inserido ');
})