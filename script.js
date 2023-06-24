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
    resultado.innerHTML = centimentroMetro(valor);
  } else if (medidaOrigem.value == "centimetros" && medidaSaida.value == "polegadas") {
    resultado.innerHTML = centimetroPolegada(valor);
  } else if (medidaOrigem.value == "polegadas" && medidaSaida.value == "metros") {
    resultado.innerHTML = polegadaMetro(valor);
  } else if (medidaOrigem.value == "polegadas" && medidaSaida.value == "centimetros") {
    resultado.innerHTML = polegadaCentimetro(valor);
  } else if (medidaOrigem.value == "quilogramas" && medidaSaida.value == "gramas") {
    resultado.innerHTML = quilogramaGrama(valor);
  } else if (medidaOrigem.value == "quilogramas" && medidaSaida.value == "libras") {
    resultado.innerHTML = quilogramaLibra(valor);
  } else if (medidaOrigem.value == "gramas" && medidaSaida.value == "quilogramas") {
    resultado.innerHTML = gramaQuilograma(valor);
  } else if (medidaOrigem.value == "gramas" && medidaSaida.value == "libras") {
    resultado.innerHTML = gramaLibra(valor);
  } else if (medidaOrigem.value == "libras" && medidaSaida.value == "quilogramas") {
    resultado.innerHTML = libraQuilograma(valor);
  } else if (medidaOrigem.value == "libras" && medidaSaida.value == "gramas") {
    resultado.innerHTML = libraGrama(valor);
  } else if (medidaOrigem.value == "celsius" && medidaSaida.value == "fahrenheit") {
    resultado.innerHTML = celsiusFahrenheit(valor)
  } else if (medidaOrigem.value == "celsius" && medidaSaida.value == "kelvin") {
    resultado.innerHTML = celsiusKelvin(valor)
  } else if (medidaOrigem.value == "fahrenheit" && medidaSaida.value == "celsius") {
    resultado.innerHTML = fahrenheitCelsius(valor)
  } else if (medidaOrigem.value == "fahrenheit" && medidaSaida.value == "kelvin") {
    resultado.innerHTML = fahrenheitKelvin(valor)
  } else if (medidaOrigem.value == "kelvin" && medidaSaida.value == "celsius") {
    resultado.innerHTML = kelvinCelsius(valor)
  } else if (medidaOrigem.value == "kelvin" && medidaSaida.value == "fahrenheit") {
    resultado.innerHTML = kelvinFahrenheit(valor)
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
function centimetroPolegada(valor) {
  var centimetroParaPolegada = valor.value / 2.54;
  return centimetroParaPolegada;
}
function polegadaMetro(valor) {
  var polegadaParaMetro = valor.value / 39.37;
  return polegadaParaMetro;
}
function polegadaCentimetro(valor) {
  var polegadaParaCentimetro = valor.value * 2.54;
  return polegadaParaCentimetro;
}
function quilogramaGrama(valor) {
  var quilogramaParaGrama = valor.value * 1000;
  return quilogramaParaGrama;
}
function quilogramaLibra(valor) {
  var quilogramaParaLibra = valor.value * 2.205;
  return quilogramaParaLibra;
}
function gramaQuilograma(valor) {
  var gramaParaQuilograma = valor.value / 1000;
  return gramaParaQuilograma;
}
function gramaLibra(valor) {
  var gramaParaLibra = valor.value / 453.6;
  return gramaParaLibra;
}
function libraQuilograma(valor) {
  var libraParaQuilograma = valor.value / 2.205;
  return libraParaQuilograma;
}
function libraGrama(valor) {
  var libraParaGrama = valor.value * 453.6;
  return libraParaGrama;
}
function celsiusFahrenheit(valor) {
  var celsiusParaFahrenheit = (valor.value * 9 / 5) + 32;
  return celsiusParaFahrenheit
}
function celsiusKelvin(valor) {
  var celsiusParaKelvin = valor.value + 273.15
  return celsiusParaKelvin
}
function fahrenheitCelsius(valor) {
  var fahrenheitParaCelsius = (valor.value - 32) * 5 / 9
  return fahrenheitParaCelsius
}
function fahrenheitKelvin(valor) {
  var fahrenheitParaKelvin = (valor.value - 32) * 5 / 9 + 273.15
  return fahrenheitParaKelvin
}
function kelvinCelsius(valor) {
  var kelvinParaCelsius = valor.value - 273.15
  return kelvinParaCelsius
}
function kelvinFahrenheit(valor) {
  var kelvinParaFahrenheit = (valor.value - 273.15) * 9 / 5 + 32
  return kelvinParaFahrenheit
}
