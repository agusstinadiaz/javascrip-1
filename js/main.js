const productos = [
    { nombre: 'texanas', precio: 73900 },
    { nombre: 'borcegos', precio: 65000 },
    { nombre: 'zapatillas', precio: 60000 },
    { nombre: 'mocasines', precio: 57500 },
];
let carrito = []

let seleccion = prompt('Hola, desea comprar algun producto?')

while(seleccion != 'Si' && seleccion != 'No') {
    alert('Responder solamente con Si o No')
    seleccion = prompt('Hola, desea comprar algun producto?')
}

if(seleccion == 'Si') {
    alert('A continuacion nuestra lista de productos!')
    let losProductos = productos.map((producto) => producto.nombre + ' ' + producto.precio + '$');
    alert(losProductos.join(' - '))
} else if (seleccion == 'No') {
    alert('Gracias por venir, hasta pronto!')
}

while(seleccion != 'No'){
    let producto = prompt('Agrega un producto a tu carrito!')
    let precio = 0

    if(producto == 'texanas' || producto == 'borcegos'|| producto == 'zapatillas' || producto == 'mocasines'){
        switch(producto) {
            case 'texanas':
                precio = 73900;
                break;
            case 'borcegos':
                precio = 65000;
                break;
            case 'zapatillas':
                precio = 60000;
                break;
            case 'mocasines':
                precio = 57500;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt('Cuantas unidades quiere comprar?'))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert('No tenemos ese producto :(')
    }

    seleccion = prompt('Desea seguir comprando?')
    
    while(seleccion === 'No') {
        alert('Gracias por tu compra, hasta pronto!')
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)