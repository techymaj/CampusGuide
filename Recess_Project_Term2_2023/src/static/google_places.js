$.getScript("https://maps.googleapis.com/maps/api/js?key=" + google_api_key + "&libraries=places&callback=initMapp");

function initMapp() {
    initAutocomplete();

    $("#btn").on("click", function () {
        CalcRoute();
    });
}

let autocomplete_a;
let autocomplete_b;

function initAutocomplete() {
    var makerereBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(0.34, 32.57),
        new google.maps.LatLng(0.33, 32.58)
    );

    autocomplete_a = new google.maps.places.Autocomplete(
        document.getElementById('id-google-address-a'),
        {
            types: ['geocode'],
            componentRestrictions: { 'country': ['uganda'] },
            bounds: makerereBounds,
        });

    autocomplete_a.addListener('place_changed', function () {
        onPlaceChanged('a');
    });

    autocomplete_b = new google.maps.places.Autocomplete(
        document.getElementById('id-google-address-b'),
        {
            types: ['geocode'],
            componentRestrictions: { 'country': ['uganda'] },
            bounds: makerereBounds,
        });

    autocomplete_b.addListener('place_changed', function () {
        onPlaceChanged('b');
    });
}

function getCurrentLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                callback(position.coords.latitude, position.coords.longitude);
            },
            function (error) {
                console.error("Error getting current location:", error);
                callback(null, null); // Call the callback with null values
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        callback(null, null); // Call the callback with null values
    }
}

function onPlaceChanged(addy) {
    let auto;
    let el_id;
    let lat_id;
    let long_id;

    if (addy === 'b') {
        auto = autocomplete_b;
        el_id = 'id-google-address-b';
        lat_id = 'id-lat-b';
        long_id = 'id-long-b';
    } else {
        auto = autocomplete_a;
        el_id = 'id-google-address-a';
        lat_id = 'id-lat-a';
        long_id = 'id-long-a';
    }

    var address = document.getElementById(el_id).value;

    if (address === '') {
        getCurrentLocation(function (latitude, longitude) {
            if (latitude !== null && longitude !== null) {
                $('#' + lat_id).val(latitude);
                $('#' + long_id).val(longitude);
                // You can optionally trigger CalcRoute here
            }
        });
    } else {
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                $('#' + lat_id).val(latitude);
                $('#' + long_id).val(longitude);

                // You can optionally trigger CalcRoute here
            }
        });
    }
}

function validateForm() {
    var valid = true;
    $('.geo').each(function () {
        if ($(this).val() === '') {
            valid = false;
            return false;
        }
    });
    return valid;
}

function CalcRoute() {
    if (validateForm()) {
        var params = {
            lat_a: $('#id-lat-a').val(),
            long_a: $('#id-long-a').val(),
            lat_b: $('#id-lat-b').val(),
            long_b: $('#id-long-b').val(),
            // Get the selected travel mode from the dropdown

        
            travel_mode: $('#id-travel-mode').val()
        };

        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        url = '/map?' + query;
        window.location.assign(url);
    }
}
