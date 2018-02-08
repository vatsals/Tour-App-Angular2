import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  zoom: number = 10;
  lat: number = 42.8582;
  lng: number = -70.9299;
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;


  markers: marker[] = [];

  constructor(private _markerService:MarkerService) {
  	this.markers = this._markerService.getMarkers();
  }

  clickedMarker(marker: marker, index:number) {

  }

  mapClicked($event:any) {
  	var newMarker = {
  		place: 'Untitled', 
  		lat: $event.coords.lat,
  		lng: $event.coords.lng,
  		draggable: false
  	}
  	this.markers.push(newMarker);
  	this._markerService.addMarker(newMarker);
  }

  markerDragEnd(marker: any, $event:any) {
  	console.log('Dragged', marker, $event);
  	var updMarker = {
  		place: marker.place, 
  		lat: parseFloat(marker.lat),
  		lng: parseFloat(marker.lng),
  		draggable: false
  	}

    var newLat = $event.coords.lat;  
    var newLng = $event.coords.lng;
    this._markerService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
  	console.log('Marker added');
  	if(this.markerDraggable=='yes') {
  		var isDraggable = true;
  	}
  	else {
  		var isDraggable = false;
  	}

  	var newMarker = {
  		place: this.markerName,
  		lat: parseFloat(this.markerLat),
  		lng: parseFloat(this.markerLng),
  		draggable: isDraggable,
  	}
  	this.markers.push(newMarker);
  	this._markerService.addMarker(newMarker);
  }

  removeMarker(marker) {
  	for(var i=0;i<this.markers.length;i++) {
		if(marker.lat==this.markers[i].lat && marker.lng==this.markers[i].lng) {
			this.markers.splice(i, 1);
		}
	}
	this._markerService.removeMarker(marker);
  }

}

interface marker {
	place?: string;
	lat: number;
	lng: number;
	draggable: boolean;
}

