//Ajustando altura da caixa azul logo abaixo do botão calcular.

//A function abaixo realiza esse ajuste automáticamente
//Ela é ativada quando o site é carregado e quando o usuário realiza alterações no tamanho da tela
function ajutando_altura(){
    //Criando variáveis com as alturas do comnentes. 
    var altura_seção = document.querySelector('#secao').clientHeight
    var altura_texto = document.querySelector('#texto_incial').clientHeight
    var altura_cxnumero = document.querySelector('#inumero').clientHeight
    var altura_cxcalcular = document.querySelector('#calcular').clientHeight

    //Conta que realiza o ajuste do tamanho da tela
    document.querySelector('#res').style.height = (altura_seção - altura_texto - altura_cxnumero - altura_cxcalcular - 100) + 'px'
}

//As linhas de código abaixo são refetentes a execução do programa quando clicado no botão calcular

//Selecionando as divs adequadas para recebimento das respostas
var esquerda = document.querySelector('#esquerda')
var centro = document.querySelector('#centro')
var direita = document.querySelector('#direita')
var azul = document.querySelector('#res')

//Function que erá ativada quando clicar o botão calcular
function rodar(){
    //Puxando o número digitado pelo usuário
    var numero = document.querySelector('#inumero').value
    //Subtraindo 1 desse valor para obtenção dos valores que vão na caixa da esquerda
    numero -=1

    //O primeiro for atualiza o valor base da tabuada
    for (d=1; d<=3; d++){
        //Gerando um texto vazio para recebimento dos resultados
        var texto = '<p>'

        //Esse for é resposável para criação do texto com as tabuadas e escrever esse resultado na variável texto
        for (c=1; c<=10; c++){
            texto += `${numero} * ${c} = ${numero*c} <br>`
        }

        //Fechando o parágrafo do texto
        texto += '</p>'

        //Incrementando o valor do número base da tabuada
        numero++

        //Alocando o texto na div correta
        if(d==1){
            esquerda.innerHTML = texto
        }
        else if(d==2){
            centro.innerHTML = texto 
        }
        else{
            direita.innerHTML = texto
        }
    }   

    fs = 2
    var ciclo = 0
    centro.style.fontSize = fs + 'em'
    while (Number(document.querySelector('#centro').clientHeight) / Number(document.querySelector('#res').clientHeight) > 0.9 && ciclo<60) {
        ciclo++
       fs -= 0.05
       centro.style.fontSize = fs + 'em'
    }

    fs = 1.5
    var ciclo = 0
    direita.style.fontSize = fs + 'em'
    while (Number(document.querySelector('#direita').clientHeight) / Number(document.querySelector('#res').clientHeight) > 0.85 && ciclo<60) {
        ciclo++
       fs -= 0.05
       direita.style.fontSize = fs + 'em'
       esquerda.style.fontSize = fs + 'em'
    }





    
     
}


