export class Init {
	load() {
		if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
			var markers = [
				{
					place: "Destination 1", 
					lat: 42.8255,
					lng: -71.0180,
					draggable: true
				},
				{
					place: "Destination 2", 
					lat: 42.8681,
					lng: -70.8898,
					draggable: true
				},
				{
					place: "Destination 3", 
					lat: 42.8582,
					lng: -70.9304,
					draggable: false
				}
			];
			localStorage.setItem('markers', JSON.stringify(markers));
		}
		else {
			console.log('Loading markers');
		}
	}
}