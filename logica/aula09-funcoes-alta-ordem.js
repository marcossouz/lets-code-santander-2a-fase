// Recebendo uma Função como Parâmetro

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair); 


// Retornando Funções

const somarX = (x) => (y) => x + y;

const somar1 = somarX(1);
const somar2 = somarX(2);
const somar3 = somarX(3);