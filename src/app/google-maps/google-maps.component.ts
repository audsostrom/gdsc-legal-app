import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements OnInit {
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCRD-Aseoxpt8UwfLuWS4MFHwO-apUtQu4',
      libraries: ['places', 'geometry'] // Add the 'places' and 'geometry' libraries
    })

    loader.load().then((google) => {
      const mapElement = document.getElementById("map") as HTMLElement;
      if (mapElement) {
        // Get user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            // Create map centered on user's location
            const map = new google.maps.Map(mapElement, {
              center: userLocation,
              zoom: 15
            });
            // Add marker for user's location
            new google.maps.Marker({
              position: userLocation,
              map: map,
              title: "Your Location"
            });

            // Autocomplete functionality
            const input = document.getElementById("pac-input") as HTMLInputElement;
            const autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo("bounds", map);

            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();
              if (!place.geometry || !place.geometry.location) {
                console.error("Place not found");
                return;
              }
              // If the place has a geometry, set map center and add a marker
              map.setCenter(place.geometry.location);
              map.setZoom(15);
              new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name
              });

              // Directions functionality
              const directionsService = new google.maps.DirectionsService();
              const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map
              });

              directionsService.route(
                {
                  origin: userLocation,
                  destination: place.geometry.location,
                  travelMode: google.maps.TravelMode.DRIVING
                },
                (response, status) => {
                  if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                  } else {
                    console.error('Directions request failed due to ' + status);
                  }
                }
              );
            });
          }, () => {
            console.error('Error: The Geolocation service failed.');
          });
        } else {
          console.error('Error: Your browser does not support geolocation.');
        }
      } else {
        console.error('Element with id "map" not found.');
      }
    });
  }
}


//your API key: AIzaSyCRD-Aseoxpt8UwfLuWS4MFHwO-apUtQu4
