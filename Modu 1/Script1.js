
/*
-------------------------------------------
                    HELLO WORLD
-------------------------------------------
                    exemplo:
!alert ("hello world");

                    exemplo:
console.log("hello world2.0");

-------------------------------------------
                    VARIAVEIS 
-------------------------------------------
let nome = "gui"; // string
let idade = 20; // number
let logado = true; //boolean
let lista = ["ovo", "farinha"]; //array
let nomeCompleto = {nome: "gui", idade:20}; //object
-------------------------------------------
                    VAR,LET,CONST
-------------------------------------------
                    exemplo:
    -> Funciona da mesma maneira o var e let
var nome = "gui" 
var idade = 20;
                    exemplo:
    -> n precisa digitar o let ou var de novo.
var nome = "gui"
console.log(nome)
nome = "joao"
console.log(nome)
                    exemplo:
    -> pode colocar o console.log no final.
var nome = "gui";
nome = "joao";
console.log(nome);
console.log(nome);


                    exemplo:const
    ->Ja o const, vai ser sempre o primeiro valor que criou, entao nao adianta criar outras variaveis.
const nome = "gui";
nome = "joao";
console.log(nome);
console.log(nome);

-------------------------------------------
                OPERACOES EM VARIAVEIS
-------------------------------------------
                exemplo:
let x = 1;
x = x + 2;
console.log(x);

                exemplo:
let nome = "gui";
let sobrenome = "porto";
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

                exemplo:
let n1 = 10;
let n2 = 20;
let n3 = 30;
let operacao = n1 + n2 + n3;
console.log(operacao);

                exemplo:
let n1 = 10;
let n2 = 20;
let n3 = 30;
let operacao = (n1 - n2) + n3;
console.log(operacao);

                exemplo:
let n1 = 10;
let n2 = 20;
console.log(n1 + n2);
-------------------------------------------
                STRING E TEMPLATE STRING
-------------------------------------------
                exemplo:

let nome = "gui";
let sobrenome = "porto";
let nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto);

                exemplo:
let nome = "gui";
let sobrenome = "porto";
let nomeCompleto = `${nome} ${sobrenome}`
console.log("Nome: " + nomeCompleto);
                exemplo:
let idade = 90;
let idadeString = `idade: ${idade} anos`;
console.log(idadeString);

                exemplo:
let idade = 90;
let text = "anos"
let idadeString = `${idade} ${text}`;
console.log("Idade: "idadeString);
-------------------------------------------
                CONDICIONAIS: IF/ELSE
-------------------------------------------
let idade = 18;
if (idade >=18) {
    console.log("vc e de MAIOR")
} else {
    console.log("vc e de MENOR")
}
-------------------------------------------
                CONDICIONAIS: == e ===
-------------------------------------------
                exemplo:
let idade = 20;
if (idade === 20) {
    console.log("vc tem 20 anos")
}
                exemplo:
let idade = 20;
if (idade === 20){
    idade = idade + 10;
    console.log("vc att sua idade");
    console.log(idade);
}
-------------------------------------------
                MULTICONDICIONAIS && e ||
-------------------------------------------

            1exemplo:
let idade = 20;
if (idade >=18) {
    console.log("vc e um adulto")
}
            2exemplo:
    ->nesse caso, a idade tem q aplicar em idade>=18 e tmb idade <60, so assim rodando o codigo! 
    ->repare q se eu colocar um valor q n condiz com as duas regras, o codigo nao roda.

    let idade = 19;
    if (idade >=18) {
        if (idade < 60) {
            console.log("vc e um adulto");
        }
    }
            3exemplo:
    ->repare q se separmos, o codigo fica confuso, entao, pq aplica a regra dos dois caso seja adulto, sendo assim repetira a mesma mensagem.
    -> o && significa que as duas condicoes precisa existir, p/ o code rodar.

    let idade = 19;
    if (idade >=18) {
        console.log("vc e um adulto");
    }
    if (idade < 60 && idade === 18) {
        console.log("vc e um adulto");
    }

            5exemplo:&&
    ->a forma mais correta para executar o ultimo codigo.

    let idade = 19;
    if (idade >=18 && idade < 60) {
        console.log("vc e maior de idade");
    }

            6exemplo:||
    -> ja nesse caso, qualquer uma das regras q satisfaca ira funcionar, aqui voltamos ao problema do codigo do exemplo 3, pq 15 obviamente e menor q 60, e ira dizer q e um adulto.

    let idade = 15;
    if (idade >= 18 || idade < 60) {
        console.log("vc e um adulto")
    }
-------------------------------------------
                CONDICIONAIS DUPLAS IF ELSE
-------------------------------------------
                exmeplo:
    ->em resumo o if e um TRUE ou FALSE.
let ok = true
if(ok) {
    console.log("entrou no if");
} else {
    console.log("n entrou no if");
}

            exemplo:
let idade = 20;
let adulto = idade > 18 && idade < 60;

if (adulto) {
    console.log("e adulto");
} else {
    console.log("n e adulto");
}



// 1-  substitua o @ pela condicional correta console.log(x @ y);  o resultado precisa ser: TRUE 
let x = 10;
let y = 5;
console.log(x > y);

// 2-  substitua o @ pela condicional o resultado precisa ser: FALSE
let w = "10";
let z = 10;
console.log(w === z);

// 3-  substitua o @ pela condicional correta console.log(x @ y); o resultado precisa ser: TRUE

let a = 10;
let b = 5;
console.log (a != b);


// 4- crie uma condicional para verificar se o preco da carne esta barato ou caro PS: Ate 45 esta barato
let preco = 40.2;
if (preco >=45) {
    console.log("caro");
} else {
    console.log("barato");
}



-------------------------------------------
                CONDICIONAIS DUPLAS  ELSE IF pt 2
-------------------------------------------

let idade = 18;
if(idade < 18) {
    console.log("u are a child ");
} else if (idade >=18 && idade < 60) {
    console.log("u are an adult");
} else if (idade > 60) {
    console.log("u are olderly");
} 

------------------------------------------
                CONDICIONAIS TERNARIA
-------------------------------------------
-> deu certo e 2 deu errado 10, isso e nossa condicional ternaria:vms usar um exemplo do valor de um frete para um usuario, ou seja se ele for membro e 2 se n for e 10.
                    Exemplo 1
let isMember = true;
let shipping = isMember ? 2 : 10; //temos q colocar a interrogacao e essa separacao de : q  vai dizer pro codigo, que o primeiro e true e o outro e false.
//agr vms executar o codigo de fato !, ja aqui substituimos com string nossos bollean 2 : 10, e obviamente puxamos a variavel isMember junto com a interrogacao.
console.log(isMember ? "vc e membro" : "vc n e membro");
//agr, jogamos na tela o "frete: 2 ou 10", o shipping ta puxando a variavel ismember, e se tive true e 2 e se for false e 10.
console.log("Frete: " + shipping);


                    Exemplo 2
//Tmb podemos imaginar que isso e como se fosse um if in line, basicamente. ja aqui colocamos uma alternativa se a pessoa e adulta ou nao, usamos novamente nosso padrao ? valor : valor , n esqueca que se for colocar uma string nas 2 opcoes, precisa por aspas !!!!!

let age = 90; 
let isAdult = ((age >= 18 && age < 60) ? "sim" : "nao");
console.log(isAdult);




------------------------------------------
                SWIFT
-------------------------------------------
e similar ao if, mas vou por apenas a variavel que quer verificar, e entao vc pode colocar as atribuicoes. mas n pode esquecer de colcoar o break para cada atributo adicionado, mas nao e muito comum usar o switch, mas em algumas situacoes pode ser necessario saber.
        exemplo:

let profession = "fireman";

console.log("Profissao: " + profession);
 switch(profession) {
    case "supervisor":
        console.log("ur tshirt gonna be GREEN");
    break;
    case "fireman":
        console.log("ur tshirt gonna be RED");
    break;
    case "police":
        console.log("ur tshirt gonna be BLUE");
    break;

    default:
        console.log("ur tshirt gonna be BLACK")
    break;
 }
*/