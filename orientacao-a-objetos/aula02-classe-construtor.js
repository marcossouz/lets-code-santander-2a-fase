// sintaxe
class nomedaclasse {}

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}


const pessoa1 = new Pessoa('Carlos', 20);
console.log(pessoa1); 
//Veremos no console:
//Pessoa { nome: 'Carlos', idade: 20 }


const pessoa2 = new Pessoa('Marta', 26);
console.log(pessoa2); 
//Veremos no console:
//Pessoa { nome: 'Marta', idade: 26 }
