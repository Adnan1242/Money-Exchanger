
const urlbase = 'https://v6.exchangerate-api.com/v6/37006c2c0a72fd21ddaf8fb5/latest';
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('form button');
const countryfrom = document.querySelector('.from select');
const countryto = document.querySelector('.to select');




for ( let select of dropdowns){
    for( code in countryList){
       let newoption = document.createElement('option')
       newoption.innerText= code;
       newoption.value= code;
       if(select.name === 'from' && code === 'USD' ){
        newoption.selected = 'selected';
       }
       else if(select.name === 'to' && code === 'PKR' ){
        newoption.selected = 'selected';
       }
       select.append(newoption);
    }
// api key : 37006c2c0a72fd21ddaf8fb5
// https://v6.exchangerate-api.com/v6/37006c2c0a72fd21ddaf8fb5/latest/USD
    select.addEventListener('change', (e)=>{
        updateflag(e.target)
        
    })
}
const updateflag = (element)=>{
  curcode = element.value;
  countrycode = countryList[curcode];
  newscr =  `https://flagsapi.com/${countrycode}/flat/64.png`
 let img = element.parentElement.querySelector('img');
 img.src = newscr;
}

btn.addEventListener('click',  async(e)=>{
    e.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountvalue= amount.value;
 if (amountvalue ==="" || amountvalue < 1  ){
    amountvalue = 1;
    amount.value = '1'; 
 }

// let urlfrom = `${urlbase}/${countryfrom.value}` 
// let responsefrom = await fetch(urlfrom);
// let datafrom = await responsefrom.json();
//  datafrom.base_code = 1;
//  let rate = datafrom.base_code = 1;
//  let amount1 = rate * amount.value


let url2 = `${urlbase}/${countryto.value}` 
let responseto = await fetch(url2);
let datato = await responseto.json();

console.log(datato.conversion_rates)





});




