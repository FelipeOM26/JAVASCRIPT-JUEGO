let nombre;
let numero;
let intentos = 0;

let numero2;

nombre = prompt('Ingresa tu nombre: ');

alert(`Bienvenido al juego, ${nombre}!`);

numero = parseInt(prompt('Dime del 1 al [Elige un numero] para adivinar un numero '));
console.log(typeof (numero));

let numeroSecreto = Math.floor(Math.random() * numero + 1);
console.log(numeroSecreto);


let maximoIntentos = 3;

while (numero2 != numeroSecreto) {

   numero2 = parseInt(prompt(`Adivina un numero del 1 al ${numero} `));


   if (isNaN(numero2) || numero2 < 1 || numero2 > numero) {
      alert('Por favor, ingresa un numero valido del 1 al 10.');
      continue;
   }

   intentos++;

   if (numero2 == numeroSecreto) {

      if (intentos > 1) {
         alert(`Adivinaste! El numero es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
         break;
      } else {
         alert(`¡Adivinaste a la primera! El numero es ${numeroSecreto}.`);
      
      }
   } else if (numero2 > numeroSecreto) {
      alert('El numero es menor.');
   } else {
      alert('El numero es mayor.');
   }

   if (intentos >= maximoIntentos) {
      alert(`Llegaste a tu limite, perdiste. El numero era ${numeroSecreto} y tu numero de intentos fue ${maximoIntentos}.`);
      break;
   }
}



