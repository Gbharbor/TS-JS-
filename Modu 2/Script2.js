/*
              ==========
             | FUNCOES  |
              ==========
->  Existem varias formas de criar funcoes, mas aqui vamos aprender a forma mais padrao,  a funcao e como se fosse uma caixinha isolada, ela basicamente so foi criada, mas ainda n executamos ela.
Entao como usamos a nossa funcao ?!

            exemplo:
function gravidade() {
    console.log("a gravidade do planeta e: "); 
    console.log(9.8);

    -aqui to usando minha funcao
    gravidade();

}

                exemplo:
->a funcao pode receber varios dados, dentro do parenteses, no caso criei aqui n1  e n2, q sao 2 variaveis, e lembre se q essas varaiveis que criei so existem dentro da funcao que criei.

function somar(m1, n2) {
    let resultado = n1 + n2;
    console.log("Resultado: " + resultado);
}

agr vms fazer ela funcionar, executando.

somar(10, 15);

    ->Exemplo: com nomes
function nomeCompleto(nome,sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Gui","Porto");
nomeCompleto("Joao","Silva");



ENTRADA -> PROCESSAMENTO -> SAIDA
agr vms entender a SAIDA ou melhor o resultado.

uma vez q tu use um return, ela acaba naquele momento , ou seja o return e nossa SAIDA e quando damos a saida, o codigo acabou, entao se vc colocar um console log a seguir denrotro da funcao, n vai aparecer.

function nomeCompleto(nome,sobrenome) {
    return `${nome} ${sobrenome}`;

}
let completo = nomeCompleto("Gui","Porto");
    console.log("Nome : " + completo);

//Entao uma vez que tu usar o return , o codigo acaba naquele momento, ou seja o return e nossa SAIDA e quando damos a saida, o codigo acaobu entao se vc colocar um console log a seguir do return da funcao, n vai aparecer.

//-> entao aqui esta nossa function, e seu return, que e onde acaba o codigo.
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
//aqui criamos uma variavel e adicionamos a funcao, e lembre se que por se tratar de uma string o nomes precisa estar entre aspas.
let completo = nomeCompleto("gui", "porto");
//ja aqui no nosso console, estamos colocando apenas a variavel, que ja vai busar automaticamente function.
console.log("Nome: " + completo);

    exemplo1:
function multiplicar (n1,n2) {
    let resultado = (n1*n2); 
    console.log("resposta: " + resultado);
}
multiplicar(5,5);


    exemplo2:
function dividir (n1,n2) {
    let resultado = (n1/n2);
    console.log("resposta: " + resultado);
}
dividir(10,2);


    exemplo3:
function somar (n1,n2) {
    let resultado = (n1+n2);
    console.log("resposta: " + resultado);
}
somar(10,10);


    exemplo4:
function diminuir (n1,n2) {
    let resultado = (n1-n2);
    console.log("resposta: " + resultado);
}
diminuir (10,5);


    exemplo 5:

function nomeCompleto(nome,sobrenome) {
    return `${nome} ${sobrenome}`;
}
    let completo = nomeCompleto("Guilherme","Porto");
    console.log("Nome completo: " + completo);




    exemplo6:
function nomeCompleto(name,lastname) {
    let nomeinteiro = `${name} ${lastname}`;
    console.log("Nome Inteiro: " + nomeinteiro);
}
nomeCompleto("gui","porto")
*/




  