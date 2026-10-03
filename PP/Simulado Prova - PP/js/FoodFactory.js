class Food {

    constructor(nome, fome, felicidade) {
        this.nome = nome;
        this.fome = fome;
        this.felicidade = felicidade;
    }

    aplicarEfeito(pet) {
        pet.fome += this.fome;
        pet.felicidade += this.felicidade;

        pet.limitarStatus();
    }
}


class Carne extends Food {

    constructor() {
        super("Carne", 25, 5);
    }
}


class Peixe extends Food {

    constructor() {
        super("Peixe", 20, 10);
    }
}


class Bolo extends Food {

    constructor() {
        super("Bolo", 15, 20);
    }
}


class PimentaDeFogo extends Food {

    constructor() {
        super("Pimenta de Fogo", 10, 30);
    }
}


class FoodFactory {

    static criarComida(tipo) {

        switch (tipo) {

            case "carne":
                return new Carne();

            case "peixe":
                return new Peixe();

            case "bolo":
                return new Bolo();

            case "pimenta":
                return new PimentaDeFogo();

            default:
                throw new Error("Comida não encontrada!");
        }
    }
}