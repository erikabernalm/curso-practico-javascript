// Cómo hallar el precio promedio ponderado de cada acción
// Fórmula: [(precio1 * accion1) + (precio2 * accion2) + (precio3 * accion3)] / (accion1 + accion2 + accion3)
// Definir el conjunto de números junto al peso o importancia de cada elemento
// Datos: precio (precio único para todas esas acciones)
// Pesos: acciones (por ejemplo se repite 300 veces el precio 20 en las acciones) 

// Crear un array de objetos

const compraAcciones = [
	{
		mes: "Junio", 
		accion: 300,
		precio: 20
	},
	{
		mes: "Agosto", 
		accion: 400,
		precio: 25
	},
	{
		mes: "Noviembre", 
		accion: 400,
		precio: 23
	}
];  

// Multiplicar cada número de la lista (dato) por su peso
// Usar de nuevo el método map de los arrays. Crear un nuevo arreglo de solo números a partir de multiplicar cada precio con su acción.

const accionesConPrecio = compraAcciones.map(
	function (elemento) {
		return elemento.precio * elemento.accion;
	}
);

// Sumar todos los elementos del arreglo de elementos multiplicados por su peso
// Sumar el costo de cada transacción para hallar el costo total de la compra de todas las acciones.
// Usar de nuevo el método reduce de los arrays.

const sumaAccionesConPrecio = accionesConPrecio.reduce(
	function (valorAcumulado = 0, nuevoElemento) {
	return valorAcumulado + nuevoElemento;
});

// Sumar todos los pesos (acciones)
// Sumar la cantidad de acciones compradas en cada transacción para hallar la cantidad total de acciones que has comprado. 
// Usar de nuevo map y reduce.

const acciones = compraAcciones.map(
	function (elemento) {
		return elemento.accion;
	}
);

const sumaAcciones = acciones.reduce(
	function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	}
);

// Hacer la división entre ambas “sumas”
// Divide el precio total de la compra por la cantidad total de acciones compradas 

const precioPromedioPonderadoPorAccion = sumaAccionesConPrecio / sumaAcciones;


// Crear función

function calcularMediaPonderada(lista) {
	
	const datosConPesos = lista.map(
		function (elemento) {
			return elemento.dato * elemento.peso;
		}
	);
	const sumaPesosConDatos = datosConPesos.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});
	const pesos = lista.map(
		function (elemento) {
			return elemento.peso;
		}
	);
	const sumaPesos = pesos.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);
	const datosPromedioPonderadoPorPesos = sumaPesosConDatos / sumaPesos;

	return datosPromedioPonderadoPorPesos;
}