let precio: number = Number(prompt("ingrese precio del producto"));
let porcentajeDelDescuento: number = 0.1;
let descuento: number = precio * porcentajeDelDescuento;
let precioFinal: number = precio - descuento;
console.log(precioFinal);
