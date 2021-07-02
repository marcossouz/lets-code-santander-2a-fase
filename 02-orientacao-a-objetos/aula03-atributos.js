class Quadrado{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);

const quadrado2 = new Quadrado('teste', 'teste2');
console.log(quadrado2);


class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
    }
}


// Atributos Opcionais
class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: undefined }
quadrado.cor = 'azul';
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: 'azul' }

quadrado.borda = undefined;
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: 'azul', borda: undefined }

quadrado.borda = 3;
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: 'azul', borda: 3 }

