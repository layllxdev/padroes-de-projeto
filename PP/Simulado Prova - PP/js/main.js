const manager = PetManager.getInstance();

const pet = manager.pet;

const petImage = document.getElementById("pet-image");
const petName = document.getElementById("pet-name");
const petMood = document.getElementById("pet-mood");
const petMessage = document.getElementById("pet-message");

const hungerValue = document.getElementById("hunger-value");
const happinessValue = document.getElementById("happiness-value");
const energyValue = document.getElementById("energy-value");
const healthValue = document.getElementById("health-value");

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const energyBar = document.getElementById("energy-bar");
const healthBar = document.getElementById("health-bar");


function atualizarTela() {

    petName.textContent = pet.nome;

    hungerValue.textContent = pet.fome;
    happinessValue.textContent = pet.felicidade;
    energyValue.textContent = pet.energia;
    healthValue.textContent = pet.saude;

    hungerBar.style.width = `${pet.fome}%`;
    happinessBar.style.width = `${pet.felicidade}%`;
    energyBar.style.width = `${pet.energia}%`;
    healthBar.style.width = `${pet.saude}%`;

    atualizarHumor();
}


function atualizarHumor() {

    if (pet.energia <= 20) {

        pet.humor = "sonolento";

        petMood.textContent = "Sonolento";

        petImage.src = "/images/dragao-normal.png";

        petMessage.textContent =
            "Estou morrendo de sono... 😴";

    } else if (pet.felicidade <= 20) {

        pet.humor = "triste";

        petMood.textContent = "Triste";

        petImage.src = "/images/dragao-triste.png";

        petMessage.textContent =
            "Estou muito triste... 😢";

    } else if (pet.fome <= 20) {

        pet.humor = "bravo";

        petMood.textContent = "Bravo";

        petImage.src = "/images/dragao-bravo.png";

        petMessage.textContent =
            "GRRRR! Estou com fome! 😡🔥";

    } else if (pet.felicidade >= 70) {

        pet.humor = "feliz";

        petMood.textContent = "Feliz";

        petImage.src = "/images/dragao-feliz.png";

        petMessage.textContent =
            "Estou muito feliz! 🐉💜";

    } else {

        pet.humor = "normal";

        petMood.textContent = "Normal";

        petImage.src = "/images/dragao-normal.png";

        petMessage.textContent =
            "Tudo tranquilo por aqui! 🐉";
    }
}

document
    .getElementById("feed-button")
    .addEventListener("click", () => {

        const comidas = [
            "carne",
            "peixe",
            "bolo",
            "pimenta"
        ];

        const tipo =
            comidas[Math.floor(Math.random() * comidas.length)];

        const comida =
            FoodFactory.criarComida(tipo);

        comida.aplicarEfeito(pet);

        petMessage.textContent =
            `Hmmm! Eu comi ${comida.nome}! 😋`;

        atualizarTela();
    });

document
    .getElementById("play-button")
    .addEventListener("click", () => {

        pet.brincar();

        petMessage.textContent =
            "Vamos brincar! 🔥";

        atualizarTela();
    });


document
    .getElementById("sleep-button")
    .addEventListener("click", () => {

        pet.dormir();

        petMessage.textContent =
            "Zzzzz... 💤";

        atualizarTela();
    });


document
    .getElementById("pet-button")
    .addEventListener("click", () => {

        pet.carinho();

        petMessage.textContent =
            "Aaaah! Eu gosto de carinho! ❤️";

        atualizarTela();
    });


document
    .getElementById("fire-button")
    .addEventListener("click", () => {

        pet.treinarFogo();

        petMessage.textContent =
            "FUUUUSH! 🔥🐉";

        atualizarTela();
    });


atualizarTela();