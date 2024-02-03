import { Component } from '@angular/core';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrls: './google-map.component.scss'
})
export class GoogleMapComponent implements OnInit {

	ngOnInit(): void {
		let loader = new Loader({
			apiKey: 'AIzaSyCRD-Aseoxpt8UwfLuWS4MFHwO-apUtQu4'
		})

	loader.load().then(() =>{
		new google.maps.Map(document.getElementById("map"), {
			center: {lat: 50, lng: 6},
			zoom: 6
		})
			  
		})	
	
	}
}
