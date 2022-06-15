// Definir las primeras variables

// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log("El precio original es " + precioOriginal); ...hay varias formas de usar el console.log ...ejemplo, podemos hacer concatenación.

// A console.log podemos enviarle un objeto con las llaves y dentro de este objeto podemos enviarle todas las variables de las que queremos imprimir en la consola

// console.log({
// 	precioOriginal,
// 	descuento,
// 	porcentajePrecioConDescuento,
// 	precioConDescuento
// });

// La consola va a imprimir un objeto con 4 variables (palabras clave) y va a mostrar su valor.


// Convertir las variables en una función

function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

	return precioConDescuento;
}  

// Escribiendo HTML desde JS

function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("InputDiscount");
	const discountValue = inputDiscount.value;

	const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

	const resultP = document.getElementById("ResultP");
	resultP.innerText = "El precio con descuento son: $" + precioConDescuento; 
}

// Reto: funciones más inteligentes
// Implementar descuentos con cupones

// Descuento sobre descuento...descuentos sucesivos. Ejemplos reales
// $100 * (100 - 15) / 100 = $85
// $85 * (100 - 15) / 100 = 72.25
// $300 descuento de 30% y 20%
// $300 * 70 / 100 * 80 / 100 = $168

function calcularPrecioConDescuentoMasCupon(precio, descuento, cupon) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

	const  precioConDescuentoMasCupon = precioConDescuento * (100 - cupon) / 100; 
	
	return precioConDescuentoMasCupon;
}  

function onClickButtonPriceDiscountCoupon() {
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("InputDiscount");
	const discountValue = inputDiscount.value;

	const inputDiscountCoupon = document.getElementById("InputDiscountCoupon");
	const discountCouponValue = inputDiscountCoupon.value;

	const precioConDescuentoMasCupon = calcularPrecioConDescuentoMasCupon(priceValue, discountValue, discountCouponValue);

	const resultPriceC = document.getElementById("ResultPriceC");
	resultPriceC.innerText = "El precio con descuento + cupón son: $" + precioConDescuentoMasCupon; 
}