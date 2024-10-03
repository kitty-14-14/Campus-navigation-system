// script.js

// Dummy data for locations (In a real-world application, fetch this data from the server)
const locations = [
    { name: 'Library', lat: 40.73061, lng: -73.935242 },
    { name: 'Cafeteria', lat: 40.729979, lng: -73.936156 }
];

// Search Functionality
function searchLocation() {
    const searchQuery = document.getElementById('locationSearch').value.toLowerCase();
    const result = locations.find(loc => loc.name.toLowerCase().includes(searchQuery));
    
    if (result) {
        alert(`Location found: ${result.name} (${result.lat}, ${result.lng})`);
        // In real implementation, pan to location on map
    } else {
        alert('Location not found');
    }
}

// Get Directions Functionality (dummy example)
function getDirections() {
    const startLocation = document.getElementById('startLocation').value;
    const endLocation = document.getElementById('endLocation').value;
    
    // Dummy directions data
    const directions = [
        `Start at ${startLocation}`,
        `Head north for 200m`,
        `Turn right towards ${endLocation}`,
        `You have arrived at ${endLocation}`
    ];
    
    const directionList = document.getElementById('directionSteps');
    directionList.innerHTML = ''; // Clear previous directions
    directions.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        directionList.appendChild(li);
    });
}
