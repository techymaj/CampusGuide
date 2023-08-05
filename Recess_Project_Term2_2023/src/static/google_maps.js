
$.getScript( "https://maps.googleapis.com/maps/api/js?key=" + google_api_key + "&libraries=places") 
.done(function( script, textStatus ) {
    google.maps.event.addDomListener(window, "load", initMap)

})


function initMap() {
  var lat_a = parseFloat(getUrlParameter('lat_a'));
  var long_a = parseFloat(getUrlParameter('long_a')); 

  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById('map-route'), {
      zoom: 7,
      center: { lat: lat_a, lng: long_a } 
  });
  directionsDisplay.setMap(map);

  // Get the travel_mode from the URL or any other source
  var travel_mode = getUrlParameter('travel_mode');
  console.log(travel_mode);

  calculateAndDisplayRoute(directionsService, directionsDisplay, lat_a, long_a, travel_mode);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, lat_a, long_a, travel_mode) {
  
  var lat_b = parseFloat(getUrlParameter('lat_b'));
  var long_b = parseFloat(getUrlParameter('long_b'));

  var origin = new google.maps.LatLng(lat_a, long_a);
  var destination = new google.maps.LatLng(lat_b, long_b);

  directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travel_mode,
  }, function (response, status) {
      if (status === 'OK') {
          directionsDisplay.setDirections(response);
      } else {
          alert('Directions request failed due to ' + status);
          // Handle error
          window.location.assign("/route");
      }
  });
}

function getUrlParameter(name) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}


