const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')
const elementGBP = document.querySelector('[data-value="GBP"]')
const elementEUR = document.querySelector('[data-value="EUR"]')

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');


getCurrencies()

setInterval(getCurrencies, 10000)

async function getCurrencies(){
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result)

    rates.USD = result.Valute.USD
    rates.GBP = result.Valute.GBP
    rates.EUR = result.Valute.EUR


    elementUSD.textContent = rates.USD.Value.toFixed(2)
    elementGBP.textContent = rates.GBP.Value.toFixed(2)
    elementEUR.textContent = rates.EUR.Value.toFixed(2)
    // color environment
{ 
    if(rates.USD.VALUE < rates.USD.Previous){
        elementUSD.classList.add('top')
    }else{
        elementUSD.classList.add('bottom')
    }

    if(rates.EUR.VALUE < rates.EUR.Previous){
        elementEUR.classList.add('top')
    }else{
        elementEUR.classList.add('bottom')
    }

    if(rates.GBP.VALUE < rates.GBP.Previous){
        GBP.classList.add('top')
    }else{
        elementGBP.classList.add('bottom')
    }
}


}


input.oninput = convertValue;
select.oninput = convertValue;

function convertValue(){
    result.value = (parseFloat(input.value) / parseFloat(rates[select.value].Value)).toFixed(2)
}