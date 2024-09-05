//criar constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

//Função para capturar o valor do input
function Pesquisar() {
   let cidade = document.querySelector('.input-cidade').value
   console.log(cidade);
   Dados(cidade)
}

//Consumindo dados da API OpenWeather
async function Dados(cidade) {
   let dados =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
   console.log(dados)
   ExibirDados(dados)
   
}

//Fumção trocar dados da tela 

function ExibirDados(dados){
   document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
   document.querySelector('.graus').innerHTML = parseInt (dados.main.temp) + '°C'
   let weather = dados.weather['0']
   document.querySelector('.previsao').innerHTML = weather.description
   document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${weather.icon}.png`
   document.querySelector('.umidade').innerHTML = 'Umidade Relativa do Ar: ' + dados.main.humidity + '%'
   document.querySelector('.velocidade').innerHTML = 'Velocidade do Vento ' + dados.wind.speed + ' Km/h'
}