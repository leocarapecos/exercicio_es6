const alunos = [
    { nome:'Joao', nota: 7 },
    { nome:'Maria', nota: 5 },
    { nome:'Carlos', nota: 8 },
    { nome:'Ana', nota: 6 },
    { nome:'Pedro', nota: 9 },
];


function aprovados(alunos){
    return alunos.nota > 6;
}

const alunosAprovados = alunos.filter(aprovados);

console.log(alunos);

console.log(`Alunos Aprovados:`);

console.log(alunosAprovados)


