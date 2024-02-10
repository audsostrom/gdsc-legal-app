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
				new google.maps.Map(mapElement, {
					center: {lat: 50, lng: 6},
					zoom: 6
				})
			} else {
				console.error('Element with id "map" not found.');
			}
		})	
	}
}

