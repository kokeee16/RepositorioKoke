var map;
var infowindow;

function initMap() {
    var toledo = new google.maps.LatLng(39.87109, -4.02268);

    map = new google.maps.Map(
        document.getElementById('map'), { center: toledo, zoom: 15 }
    );

    infowindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
        position: toledo,
        map: map,
    });
}

function centrarMap(lat, lng) {
    const positionGeo = new google.maps.LatLng(lat, lng);
    map.setCenter(positionGeo);
}

const formBusqueda = document.getElementById('form-busqueda');

const buscarHandler = (e) => {
    e.preventDefault();
    const busqueda = document.getElementById('busqueda').value;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(busqueda)}&region=ES&key=AIzaSyCnkTR_zPOUknwTlsinR5jHtr8_vbbuhb8`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Handle the data, update map, etc.
        })
        .catch(err => {
            console.error('Error consulta a la API: ' + err);
        });
};

formBusqueda.addEventListener('submit', buscarHandler);
