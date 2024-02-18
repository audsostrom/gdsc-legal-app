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
      apiKey: 'AIzaSyCRD-Aseoxpt8UwfLuWS4MFHwO-apUtQu4'
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
