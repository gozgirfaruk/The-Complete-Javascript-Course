 `use strict`

 // CHALLANGE 1
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
    }
    whereAmI(-33.933, 18.474);
 }

    // CHALLANGE 2
{
    const imgContainer = document.querySelector('.images');
    const createImage = function(imgPath){
        return new Promise(function(resolve, reject){
            const img = document.createElement('img');
            img.src = imgPath;

            img.addEventListener('load', function(){
                imgContainer.append(img);
                resolve(img);
            });

            img.addEventListener('error', function(){
                reject(new Error('Image not found'));
            });
        });
    };

    createImage('../Images/g.jpg').then(img => {
        console.log(`Image loaded successfully`);
    }).catch(err => console.error(err));
}

