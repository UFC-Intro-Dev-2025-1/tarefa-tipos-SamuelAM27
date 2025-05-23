// Escreva seu código aqui!
let cadeiras: number = 30; //essa variável deve ser number
let nomeDaSala: string = "Laboratório 3 - Bloco 1"; //variável do tipo string
let PessoasQueAprenderam; //variável do tipo undefined

console.log("O número de cadeiras na sala é " + cadeiras + " e o tipo dessa variável é " + typeof cadeiras + "!");

console.log("---------------------------------"); //Divisor de mensagens

console.log("O nome da sala que ocorre a aula é " + nomeDaSala + " e o tipo dessa variável é " + typeof nomeDaSala + "!");

console.log("---------------------------------"); //Divisor de mensagens

let alunos = true; //Troque o valor para False para receber a segunda reposta
if (alunos)
{
    console.log("Existe alunos na sala, portanto a aula pode acontecer. O tipo da variável alunos é " + typeof alunos + "!");
}
else
{
    console.log("Não existe alunos na sala, portanto a aula não pode acontecer. O tipo da variável alunos é " + typeof alunos + "!");
}

console.log("---------------------------------"); //Divisor de mensagens

console.log("Não é possível saber quantos alunos aprenderam essa matéria, portanto o tipo de variável é " + typeof notas + "!");

console.log("---------------------------------"); //Divisor de mensagens

interface Aula 
{
    nome: string;
    curso: string;
}

let AulaAtual: Aula = 
{
    nome: "Introdução A Programação",
    curso: "Design Digital",
};

console.log("O nome da nossa aula é " + AulaAtual.nome + " e nosso curso é " + AulaAtual.curso + "!");
//Tecnicamente, não é necessário especificar os tipos das variáveis no JavaScript ou TypeScript. Mas, para ajudar aquele que for ler esse código, especifique o quanto der as variáveis