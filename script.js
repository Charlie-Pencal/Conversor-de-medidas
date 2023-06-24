// var comprimento = ["Metros", "Centimetros", "Polegadas"];
// var peso = ["Quilogramas", "Gramas", "Libras"];
// var temperatura = ["Celsius", "Fahrenheit", "Kelvin"];

var categoriaSelecionada = document.getElementById("categoria");
var medidaOrigem = document.getElementById("medidaOrigem");
var medidaSaida = document.getElementById("medidaSaida");

categoriaSelecionada.addEventListener("change", function () {
  if (categoriaSelecionada.value == "comprimento") {
  } else if (categoriaSelecionada.value == "peso") {
  } else if (categoriaSelecionada.value == "temperatura") {
  }
});
converter.addEventListener("click", function () {
  if (medidaOrigem.value == "metros" && medidaSaida.value == "centimetros") {
  } else if (medidaOrigem.value == "metros" && medidaSaida.value == "polegadas") {
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
  }
});
