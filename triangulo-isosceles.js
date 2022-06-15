// Código triángulo isósceles

function alturaTrianguloIsos(lado1, lado2, base) {
  return(
	 Math.sqrt((lado1 * lado2) - (base * base / 4))
	);
}

// console.log(alturaTrianguloIsos(5, 5, 4));

// Aquí interactuamos con el HTML

function calcularAlturaTrianguloIsos() {
  const input = document.getElementById("inputTrianguloIsosLado1");
  const value = parseInt(input.value);
  const input2 = document.getElementById("inputTrianguloIsosLado2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("inputTrianguloIsosBase");
  const value3 = parseInt(input3.value);

	// Estos console.log son para debuggear...para saber si sí están entrando valores
	// console.log(input.value);
	// console.log(input2.value);
	// console.log(input3.value);
	// console.log(input3);

  if (value === value2 && value != value3) {
    const altura = alturaTrianguloIsos(value, value2, value3);
    alert(altura);
  } else {
    alert("El triángulo isósceles es aquel que tiene dos lados con la misma longitud. ¡Ingresa correctamente las medidas!");
  }
}