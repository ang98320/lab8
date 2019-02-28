function initMap() {
	// add your code here
	L.mapquest.key = "zOq3cgASGyoqtNrk77uE7UCZWQlZi4l5";
	
	var map = L.mapquest.map('map', {
		center: [32.8764723,-117.2358252],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8764723,-117.2358252]).addTo(map);
}