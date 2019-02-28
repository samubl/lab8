function initMap() {
	// add your code here
	L.mapquest.key = 'iXfevYVibfhbAWnjRg1DoHV3I97lgvMy';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.878974, -117.236]).addTo(map);
}