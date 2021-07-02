const vetor = [1,2,3,4,5,6];

const dobro = (item)=>2*item;
const vetorDobrado = vetor.map(dobro);


// Função que eleva ao quadrado
const aoQuadrado = (item, indice, vetor) => vetor[indice]*item;


// escrever a função diretamente dentro do map.
const vetor = [1,2,3,4,5,6];
const vetorTransformado = vetor.map((x)=>x+1);


const vetor = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor.map(toUpper);