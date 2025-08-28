// Initialize the map centered around Breda
var map = L.map('map').setView([51.603, 4.758], 10);
let LocationName = document.getElementById("location-name")
let LocationAdress = document.getElementById("location-adress")

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Array of locations with coordinates and names
var locations = [
    { name: "JiuJitsu Breda", coords: [51.61958, 4.72736] },
    { name: "Judoclub Michigami", coords: [51.58750, 4.31972] },
    { name: "The Factory Sport & Fun", coords: [51.58900, 4.92900] }
];

// Loop through the locations and add markers with click event
locations.forEach(location => {
    L.marker(location.coords).addTo(map)
        .bindPopup(location.name)
        .on('click', () => {
            if (location.name === "JiuJitsu Breda") {
                LocationName.textContent = "JiuJitsu Breda"
                LocationAdress.textContent = "Schapendreef 13, 4824 AV Breda, Nederland"
            } else if (location.name === "Judoclub Michigami") {
                LocationName.textContent = "Judoclub Michigami"
                LocationAdress.textContent = "Wipstraat 2, 4651 XW Steenbergen, Nederland"
            } else if (location.name === "The Factory Sport & Fun") {
                LocationName.textContent = "The Factory Sport & Fun"
                LocationAdress.textContent = "Ericssonstraat 2E, 5121 ML Rijen, Nederland"
            }
        });
    LocationName.textContent = "JiuJitsu Breda"
    LocationAdress.textContent = "Schapendreef 13, 4824 AV Breda, Nederland"
});

// Adjust map view to fit all markers
var bounds = locations.map(location => location.coords);
map.fitBounds(bounds);