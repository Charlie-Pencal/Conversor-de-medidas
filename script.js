// var comprimento = ["Metros", "Centimetros", "Polegadas"];
// var peso = ["Quilogramas", "Gramas", "Libras"];
// var temperatura = ["Celsius", "Fahrenheit", "Kelvin"];

var categoriaSelecionada = document.getElementById("categoria");
var valor = document.getElementById("valor");

categoriaSelecionada.addEventListener("change", function () {
  if (categoriaSelecionada.value == "comprimento") {
    medidaOrigem.innerHTML = `  
    <option value="metros">Metros</option>
    <option value="centimetros">Centímetros</option>
    <option value="polegadas">Polegadas</option>`;
    medidaSaida.innerHTML = `
    <option value="metros">Metros</option>
    <option value="centimetros">Centímetros</option>
    <option value="polegadas">Polegadas</option>`;
  } else if (categoriaSelecionada.value == "peso") {
    medidaOrigem.innerHTML = `  
    <option value="quilogramas">Quilogramas</option>
    <option value="gramas">Gramas</option>
    <option value="libras">Libras</option>`;
    medidaSaida.innerHTML = ` 
    <option value="quilogramas">Quilogramas</option>
    <option value="gramas">Gramas</option>
    <option value="libras">Libras</option>`;
  } else if (categoriaSelecionada.value == "temperatura") {
    medidaOrigem.innerHTML = `  
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="kelvin">Kelvin</option>`;
    medidaSaida.innerHTML = `  
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="kelvin">Kelvin</option>`;
  }
});

var medidaOrigem = document.getElementById("medidaOrigem");
var medidaSaida = document.getElementById("medidaSaida");

converter.addEventListener("click", function (conv) {
  conv.preventDefault();
  if (medidaOrigem.value == "metros" && medidaSaida.value == "centimetros") {
    resultado.innerHTML = metroCentimetro(valor);
  } else if (medidaOrigem.value == "metros" && medidaSaida.value == "polegadas") {
    resultado.innerHTML = metroPolegada(valor);
  } else if (medidaOrigem.value == "centimetros" && medidaSaida.value == "metros") {
  } else if (medidaOrigem.value == "centimetros" && medidaSaida.value == "polegadas") {
  } else if (medidaOrigem.value == "polegadas" && medidaSaida.value == "metros") {
  } else if (medidaOrigem.value == "polegadas" && medidaSaida.value == "centimetros") {
  } else if (medidaOrigem.value == "quilogramas" && medidaSaida.value == "gramas") {
  } else if (medidaOrigem.value == "quilogramas" && medidaSaida.value == "libras") {
  } else if (medidaOrigem.value == "gramas" && medidaSaida.value == "quilogramas") {
  } else if (medidaOrigem.value == "gramas" && medidaSaida.value == "libras") {
  } else if (medidaOrigem.value == "libras" && medidaSaida.value == "quilogramas") {
  } else if (medidaOrigem.value == "libras" && medidaSaida.value == "gramas") {
  } else if (medidaOrigem.value == "celsius" && medidaSaida.value == "fahrenheit") {
  } else if (medidaOrigem.value == "celsius" && medidaSaida.value == "kelvin") {
  } else if (medidaOrigem.value == "fahrenheit" && medidaSaida.value == "celsius") {
  } else if (medidaOrigem.value == "fahrenheit" && medidaSaida.value == "kelvin") {
  } else if (medidaOrigem.value == "kelvin" && medidaSaida.value == "celsius") {
  } else if (medidaOrigem.value == "kelvin" && medidaSaida.value == "fahrenheit") {
  } else if (medidaOrigem.value == medidaSaida.value) {
    alert("Escolha unidades de medida diferentes");
  }
});

function metroCentimetro(valor) {
  var metroParaCentimetro = valor.value * 100;
  return metroParaCentimetro;
}
function metroPolegada(valor) {
  var metroParaPolegada = valor.value * 39.37;
  return metroParaPolegada;
}
function centimentroMetro(valor) {
  var centimetroParaMetro = valor.value / 100;
  return centimetroParaMetro;
}
function centimetroPolegada() {}
function polegadaMetro() {}
function polegadaCentimetro() {}
function quilogramaGrama() {}
function quilogramaLibra() {}
function gramaQuilograma() {}
function gramaLibra() {}
function libraQuilograma() {}
function libraGrama() {}
function celsiusFahrenheit() {}
function celsiusKelvin() {}
function fahrenheitCelsius() {}
function fahrenheitKelvin() {}
function kelvinCelsius() {}
function kelvinFahrenheit() {}
