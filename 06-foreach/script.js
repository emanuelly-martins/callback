// EXEMPLO 06 - forEach usa callback para percorrer um array.

// Array: uma lista com três elementos.
const animais = ["Gato", "Cachorro", "Coelho"];

// Este callback recebe UM animal por vez.
function mostrarAnimal(animal) {
    console.log("Animal:", animal);
}

// foEach executa mostrarAnimal automaticamente para cada item.
