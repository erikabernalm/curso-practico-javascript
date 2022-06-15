// Encapsulando código en funciones

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
} 
perimetroCuadrado();
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
// const PI = 3.1415; ...esta es una forma de guardar PI manualmente.
const PI = Math.PI;
console.log("PI es: " + PI);

// Perímetro (circunferencia)
// const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI; 

function areaCirculo(radio) {
  return (radio * radio) * PI;  
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aquí interactuamos con el HTML
// Funciones del cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Funciones del triángulo

function calcularPerimetroTriangulo() {
  const input = document.getElementById("inputTrianguloLado1");
  const value = Number(input.value);
  const input2 = document.getElementById("inputTrianguloLado2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("inputTrianguloBase");
  const value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(value, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("inputTrianguloBase");
  const value = Number(input.value);
  const input2 = document.getElementById("inputTrianguloAltura");
  const value2 = Number(input2.value);

  const area = areaTriangulo(value, value2);
  alert(area);
}


// Funciones del círculo

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area); 
}