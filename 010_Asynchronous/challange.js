 // CHALLANGE 1
 `use strict`
{
 const whereAmI = function(lat, lng){
     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
     .then(response =>{
         if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
         return response.json()
     })
     .then(data => {
         console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
     });
 };

 whereAmI(-33.933, 18.474);
}

