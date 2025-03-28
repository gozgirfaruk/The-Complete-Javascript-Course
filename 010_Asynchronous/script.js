
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Old way of doing AJAX

const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
data =request.send();

request.addEventListener('load' , function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const htmll=`
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', htmll);
    countriesContainer.style.opacity = 1;
});
};

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('turkey');


// Modern way of doing AJAX

const getCountryData2 = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response =>response.json())
    .then(data => {
        console.log(data);
        const [data2] = data;
        const htmll=`
        <article class="country">
          <img class="country__img" src="${data2.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data2.name}</h3>
            <h4 class="country__region">${data2.region}</h4>
            <p class="country__row"><span>👫</span>${data2.population}</p>
              <p class="country__row"><span>🗣️</span>${data2.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${data2.currencies[0].code}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', htmll);
    countriesContainer.style.opacity = 1;
    });
};

    getCountryData2('turkey');
    getCountryData2('russia');
    getCountryData2('new zealand');
    getCountryData2('albania');


   const lotteryPromise = new Promise(function(resolve,reject){
    if(Math.random() >= 0.5){
        resolve('You WIN!');
    } else {
        reject('You lost your money!');
    } 
  });

  lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

  const wait = function(seconds){
      return new Promise(function(resolve){
          setTimeout(resolve, seconds * 1000);
      });
  };

  wait(2).then(() => {
      console.log('I waited for 2 seconds');
      return wait(1);
  }).then(() => {
      console.log('I waited for 1 second');
  });

  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject(new Error('Problem!')).catch(x => console.error(x));


  // Promisifying the Geolocation API
  
const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function(){
    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;
        return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    })
    .then(response =>{
        if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
    })
    .catch(err => console.error(err));
};

btn.addEventListener('click', whereAmI);

// Async / Await

try {
    const whereAmI2 =async function(country){
        const res =  await fetch(`https://restcountries.com/v2/name/${country}`);
        const data =  await res.json();
        console.log(data);
        console.log('Hi Brother');
     };
     whereAmI2('turkey');
} catch (error) {
    console.error(error);
}