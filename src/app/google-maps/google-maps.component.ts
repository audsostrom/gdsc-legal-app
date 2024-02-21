import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements OnInit {
  directionsSteps: string[] = []; // Array to hold the directions steps
  nearbyPlaces: google.maps.places.PlaceResult[] = []; // Array to hold nearby places
  directionsRenderer: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();  // Declare directionsRenderer

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
              const directionsRenderer = this.directionsRenderer;

              directionsService.route(
                {
                  origin: userLocation,
                  destination: place.geometry.location,
                  travelMode: google.maps.TravelMode.DRIVING
                },
                (response, status) => {
                  if (status === 'OK' && response) { // Add null check for response
                    directionsRenderer.setDirections(response);
                    // Extract and display steps
                    this.displayDirectionsSteps(response.routes[0].legs[0]);
                  } else {
                    console.error('Directions request failed due to ' + status);
                  }
                }
              );

              // // Directions renderer
              // this.directionsRenderer = new google.maps.DirectionsRenderer({
              //   map: map
              // });

              // Nearby places functionality
              const placesService = new google.maps.places.PlacesService(map);
              placesService.nearbySearch(
                {
                  location: userLocation,
                  radius: 5000, // Define radius (in meters) for nearby search
                  type: "lawyer|notary" // Search for lawyer and notary places
                },
                (results, status) => {
                  if (status === 'OK' && results) {
                    this.nearbyPlaces = results;
                    console.log('Nearby places:', results);
                  } else {
                    console.error('Nearby places request failed due to ' + status);
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

  displayDirectionsSteps(leg: google.maps.DirectionsLeg): void {
    this.directionsSteps = leg.steps.map(step => step.instructions);
  }

  onPlaceSelected(place: google.maps.places.PlaceResult): void {
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (place.geometry && place.geometry.location) {
        // Create a DirectionsService object
        const directionsService = new google.maps.DirectionsService();

        // Define the request object for directions
        const request = {
          origin: userLocation,
          destination: place.geometry.location,
          travelMode: google.maps.TravelMode.DRIVING
        };

        // Call the route method of DirectionsService to get the directions
        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            // Display the directions on the map
            this.directionsRenderer.setDirections(result);
          } else {
            console.error('Error fetching directions:', status);
          }
        });
      } else {
        console.error('Error: Place geometry is undefined.');
      }
    }, () => {
      console.error('Error: The Geolocation service failed.');
    });
  }
}



//your API key: AIzaSyCRD-Aseoxpt8UwfLuWS4MFHwO-apUtQu4
