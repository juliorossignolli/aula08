'Exercicio 1'
alert("Alerta de JavaScript");

'Exercicio 2'
var nomeAluno = "João da Silva";
var primeiraNota = 7;
var segundaNota = 8.5;
var multiplicacaoPrimeiraNota = primeiraNota * 0.6;
var multiplicacaoSegundaNota = segundaNota * 0.4;
var somaNotas = multiplicacaoPrimeiraNota + multiplicacaoSegundaNota;

alert("Nome do aluno: " + nomeAluno + " -- Notas do aluno: Primeira nota: " + primeiraNota + ' Segunda nota: ' + segundaNota);
alert("Nota final do aluno: " + somaNotas);

'Exercicio 3'
var nomeAlunos = ["João da Silva", "José de Andrade", "Maria do Nascimento", "Zezé Legal"];
var notaAlunos = ["7", "8.5","5", "7.8", "9", "5.5", "3", "4"];

var finalJoao = (7 * 0.6) + (8.5 * 0.4);
var finalJose = (5 * 0.6) + (7.8 * 0.4);
var finalMaria = (9 * 0.6) + (5.5 * 0.4);
var finalZeze = (3 * 0.6) + (4 * 0.4);

var notaFinalAlunos = [finalJoao, finalJose, finalMaria, finalZeze];

'Exercicio 4'
var i = 0;
while(i < 4){
    if(notaFinalAlunos[i] <= 3){
        alert( nomeAlunos[i] + ": Reprovado");
    }
    else if(notaFinalAlunos[i] <= 5){
        alert( nomeAlunos[i] + ": Recuperação");
    }
    else if(notaFinalAlunos[i] <= 7){
        alert(nomeAlunos[i] + ": Aula de reforço");
    }
    else{
        alert(nomeAlunos[i] + ": Aprovado");
    }
    i = i + 1;
}

