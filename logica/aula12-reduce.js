
const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado, item) => estado + item);

const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado, item) => estado + item, 0);

let vetor = [
    { nome : 'nome1', nota1 : 5, nota2 : 4 },
    { nome : 'nome2', nota1 : 4, nota2 : 3 },
    { nome : 'nome3', nota1 : 7, nota2 : 8 },
    { nome : 'nome4', nota1 : 2, nota2 : 7 },
    { nome : 'nome5', nota1 : 9, nota2 : 9 },
  ];

  const estadoInicial = { 
    somaNota1 : 0, 
    somaNota2 : 0, 
    qtdNota1 : 0, 
    qtdNota2 : 0,
  };

  const result = vetor.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
  }, estadoInicial);