const findMyLocation = () => {
    
    const status = document.querySelector('#status');

    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en"
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            status.textContent = data.principalSubdivision
        })

    }

    const error = () => {
        status.textContent = "Unable to Find Location";
    }
    navigator.geolocation.getCurrentPosition(success,error);
}

document.querySelector('.location-button').addEventListener('click', findMyLocation);


var hidden = false;
    function action() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('location-click').style.visibility = 'hidden';
        } else {
            document.getElementById('location-click').style.visibility = 'visible';
        }
    }

