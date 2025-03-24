
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
    .then(response => response.json())
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
getCountryData2('usa');
getCountryData2('germany');
getCountryData2('portugal');