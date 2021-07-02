// Vetores
let vetor = [1,2,3,4,5,6,7,8,9,10];

let vetor = [];
vetor[0] = 'teste';
vetor[1] = 'teste2';

vetor['indice1'] = 'teste';
vetor['indice2'] = 'teste2';

let vetor = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetor[0];
let quinto_elemento = vetor[4];


// Percorrendo o Vetor
let vetor = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}


// O for-of recebe um vetor e a variável declarada vai possuir os valores dos elementos do vetor. Assim percorrendo diretamente o array inteiro.
const vetor = [10,20,30,40,50];
for(let valor of vetor){
    console.log(valor);
}

// for-in, onde a variável declarada assume o valor dos índices do vetor passado:
const vetor = [10,20,30,40,50];
for(let indice in vetor){
    console.log(indice, vetor[indice]);
}

// Matrizes
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let linha of matriz){
    for (let dado of linha){
        console.log(dado);
    }
}


//Vetores Dinâmicos
let vetor = [10,20,30,40,50];
let novo_elemento = 60;

vetor.push(novo_elemento);

// Para remover do final:
let vetor = [10,20,30,40,50];
vetor.pop();

// Para adicionar ao começo:
let vetor = [10,20,30,40,50];
let novo_elemento = 0;

vetor.unshift(novo_elemento);

// Para remover do começo:
let vetor = [10,20,30,40,50];
vetor.shift();



