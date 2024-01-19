//`
let nombre;
let bienvenida;
let eleccion;
let numeroSecreto;
let numero;
let intentos = 0;
let intentosUsuario;
let maximoIntentos;




nombre = prompt('Escriba su nombre: ');

alert(`Bienvenido al juego ${nombre} `);

alert(`${nombre} las instrucciones son simples, elige el rango del numero maximo del cual quieres adivinar `);


eleccion = parseInt(prompt('Elige el rango: 1 al [elige el rango del numero maximo del cual quieres jugar]'));

maximoIntentos = parseInt(prompt('¿En cuantos intentos quieres adivinar el numero? '));
console.log(maximoIntentos);

numeroSecreto = Math.floor(Math.random() * eleccion) + 1;
console.log(numeroSecreto);
parseInt(intentos);

while (numero != numeroSecreto) {

   
    numero = prompt(`Adivina un numero del 1 al ${eleccion}`);

    if (isNaN(numero) || numero < 1 || numero > eleccion) {
        alert('Ingresa un valor numerico valido');
        continue;
    }

    intentos++;

    if (numero == numeroSecreto) {

        alert(`Adivinaste!, el numero de intentos fue ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break;

    } else if (numero > numeroSecreto) {
        alert('El numero es menor, vamos, tu puedes!');


    } else if (numero < numeroSecreto) {
        alert('Casi! el numero es mayor');
    }

    if (intentos >= maximoIntentos) {
        alert(`Llegaste a tu limite, perdiste. El numero era ${numeroSecreto} y tu numero de intentos fue ${maximoIntentos}.`);
        break;
    }



}






