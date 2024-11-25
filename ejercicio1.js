const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
    // Inicializamos dos arreglos vacíos
    let evenNumbers = [];
    let oddNumbers = [];

    // Recorremos el array
    array.forEach(num => {
        // Si el número es par, lo agregamos a evenNumbers
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            // Si es impar, lo agregamos a oddNumbers
            oddNumbers.push(num);
        }
    });

    // Usamos desestructuración para devolver ambos arrays
    return { evenNumbers, oddNumbers };
};

// Llamamos a la función y desestructuramos el resultado
const { evenNumbers, oddNumbers } = orderNumbers(randomNumbers);

// Mostramos los resultados
console.log("Números pares:", evenNumbers);
console.log("Números impares:", oddNumbers);
