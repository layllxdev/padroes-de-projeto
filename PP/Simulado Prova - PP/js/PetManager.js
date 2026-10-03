class PetManager {

    static instance = null;

    constructor() {

        if (PetManager.instance) {
            return PetManager.instance;
        }

        this.pet = new Pet("Draco");

        PetManager.instance = this;
    }

    static getInstance() {

        if (!PetManager.instance) {
            PetManager.instance = new PetManager();
        }

        return PetManager.instance;
    }
}