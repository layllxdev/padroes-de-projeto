class Pet {

    constructor(nome) {
        this.nome = nome;

        this.fome = 80;
        this.felicidade = 80;
        this.energia = 80;
        this.saude = 100;

        this.humor = "normal";
    }

    alimentar(valor = 20) {
        this.fome += valor;

        if (this.fome > 100) {
            this.fome = 100;
        }

        this.felicidade += 5;

        if (this.felicidade > 100) {
            this.felicidade = 100;
        }
    }

    brincar() {
        this.felicidade += 15;
        this.energia -= 10;
        this.fome -= 10;

        this.limitarStatus();
    }

    dormir() {
        this.energia += 30;
        this.fome -= 10;

        this.limitarStatus();
    }

    carinho() {
        this.felicidade += 10;

        this.limitarStatus();
    }

    treinarFogo() {
        this.energia -= 15;
        this.fome -= 5;

        this.limitarStatus();
    }

    limitarStatus() {

        this.fome = Math.max(0, Math.min(100, this.fome));

        this.felicidade = Math.max(
            0,
            Math.min(100, this.felicidade)
        );

        this.energia = Math.max(
            0,
            Math.min(100, this.energia)
        );

        this.saude = Math.max(
            0,
            Math.min(100, this.saude)
        );
    }
}