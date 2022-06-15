// Funciones Helpers

// function esPar(numerito) {
// 	if (numerito % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// La función anterior se puede simplificar porque el true y el false ya nos lo está dando por defecto el paréntesis

function esPar(numerito) {
	return (numerito % 2 === 0); 
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Pasos para calcular la Mediana General

const salariosCol = colombia.map(
	function (personita) {
		return personita.salary;
	}
);

const salariosColSorted = salariosCol.sort(
	function (salaryA, salaryB) {
		return salaryA - salaryB;
	}
);

// Calculadora de mediana

function medianaSalarios(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const personitaMitad1 = lista[mitad - 1];
		const personitaMitad2 = lista[mitad];
		const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
		return mediana;
	} else {
		const personitaMitad = lista[mitad];
		return personitaMitad;
	}
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

// const arrayEjemplo = [0, 1, 2, 3, 4, 5, 8, 9, 10];
// const Ejemplo = [6, 7];  .....se paró en la posición 5 y ahí hizo el corte sacando 2 elementos

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
	spliceStart,
	spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
	medianaGeneralCol,
	medianaTop10Col
});



