// Foram criadas as variaveis para pegar os valores de categoria e valor que serão utilizados
var categoriaSelecionada = document.getElementById("categoria");
var valor = document.getElementById("valor");

// Aqui utilizei o addEventListener para quando for selecionado a opção no select de categoria, ele puxar o if de acordo para que o innerHTML imprima nos selects as opçoes respectivas
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

// Criadas as variaveis que pegam os valores dos select de entrada e saida de tipo.
var medidaOrigem = document.getElementById("medidaOrigem");
var medidaSaida = document.getElementById("medidaSaida");

// Aqui usei o addEventListener onde quando você clica o botão ele ativa a função de acordo com o que esta selecionado na unidade de entrada e unidade de saida, com um preventDefault para impedir que a pagina atualize. Foi utilizado a estrutura if e else com a verificação do valor das variaveis de medidaOrigem e medidaSaida. Utilizei o innerHTML para que o resultado da função aparecer dentro da div resultado. No final recebendo um ultimo if para que se a condição mostrasse que a origem e a saida forem iguais, aparecer um alert para pedir para colocar medidas diferentes.
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

// Aqui começam as funções de conversão, onde recebe o valor como parametro, foram criadas variaveis em que armazenei o valor do valor com as operações com um return, para que a função retorne o resultado
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
