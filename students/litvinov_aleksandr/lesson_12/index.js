function initMap() { }

const calculateAndDisplayRoute = function (directionsService, directionsRenderer) {
    const start = document.querySelector("input.start").value;
    const end = document.querySelector("input.end").value;
    directionsService.route(
        {
            origin: start,
            destination: end,
            travelMode: "WALKING"
        },
        function (response, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to" + status);
            }
        }
    );
};

initMap = function () {
    var myLatLng = { lat: 46.64798304, lng: 32.63328588 };
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeControl: true,
    });

    directionsRenderer.setMap(map);

    const btn = document.querySelector("input.content__btn");

    const onClickHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    btn.addEventListener("click", onClickHandler);
};