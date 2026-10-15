// EXEMPLO 06 - forEach usa callback para percorrer um array.

// Array: uma lista com três elementos.
const animais = ["Gato", "Cachorro", "Coelho"];

// Este callback recebe UM animal por vez.
function mostrarAnimal(animal) {
    console.log("Animal:", animal);
}

// forEach executa mostrarAnimal automaticamente para cada item.
// Sem parênteses: passamos a função, não o resultado dela.
animais.forEach
