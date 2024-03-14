// Inicio de la pagina
let nombre = prompt('Introduce tu Nombre');
let apellido = prompt('Introduce tu Apellido');
console.log ('Bienvenid@', nombre + " " + apellido); 

console.log ('¿Como usar la calculadora?');
console.log ('Ingresar digitos: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0')
console.log ('Realizar operaciones matemáticas básicas (suma, resta, multiplicación, división): 3 + 5 = 8')
console.log ('Obtener el resultado de la operación: =')
console.log ('Borrar la pantalla de la calculadora: C')
console.log ('Eliminar el último símbolo ingresado: 1234 ← 123')
console.log ('Separar la parte fraccionaria en un número decimal: 0.1 + 0.2 = 0.3')   

// Calculadora
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if(pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Error!';
            }
            return;
        }
        
        if (pantalla.textContent === '0' || pantalla.textContent === 'Error!') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
            }
    })
})
