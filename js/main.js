
let = alert ('Ingrese sus datos para registrarse en la consola');
let = prompt ('Registrar usuario');
let = prompt ('Ingrese la contraseña');

let = alert ('Registra tus datos para ingresar a la consola');
let nombre = prompt ('Introduce tu Nombre')
let apellido = prompt('Introduce tu Apellido');
console.log ('Bienvenid@', nombre + " " + apellido); 
confirm ('Tu usuario fue registrado correctamente!')

const usuarios = [ 
    {De: 'Agustina Diaz', Para: 'RRHH', Asunto: 'No leido'}, 
    {De: 'Ignacio Rodriguez', Para: 'RRHH', Asunto: 'No leido'},
     {De: 'Camila Cardozo', Para: 'RRHH', Asunto: 'Leido'}
     ]; 
    console.table(usuarios);

console.warn('Completa el siguiente cuestionario para ser parte de la entrevista laboral!');
alert('Para ser parte de este equipo es importante residir en Zona Norte, tener una edad minima de 18 años y tener experiencia en Atencion al Cliente.');

let edadMinima = Number(prompt('¿Cuantos años tienes?'));

if (edadMinima >= 18) {
    console.log ('Cumplis el minimo requisito para una entrevista')
}
if (edadMinima <= 17) {
    console.log ('No cumplis el minimo requisito para una entrevista')
}


let zonaResidencia = String(prompt('¿En que zona residis? (Ej: Zona Norte)'));

if (zonaResidencia === 'Zona Norte') {
    console.log ('Cumplis el minimo requisito para una entrevista')
}
if (zonaResidencia == 'Zona Sur') {
    console.log ('No cumplis el minimo requisito para una entrevista')
}

let experiencia = String(prompt('¿Contas con experiencia en Atencion al Cliente? (Ej: Si)'));

if (experiencia === 'Si') {
    console.log ('Cumplis el minimo requisito para una entrevista')
}
if (experiencia == 'No') {
    console.log ('No cumplis el minimo requisito para una entrevista')
}

console.log ('Felicidades, cumpliste con todos los requisitos para la entrevista!')
