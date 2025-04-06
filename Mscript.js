// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// // Firebase Configuration (Same as your existing config)
// const firebaseConfig = {
//   apiKey: "AIzaSyBgEveamnuk5oqKhEr7pBYLs-JIVzSibX0",
//   authDomain: "smart-donation-website.firebaseapp.com",
//   projectId: "smart-donation-website",
//   storageBucket: "smart-donation-website.firebasestorage.app",
//   messagingSenderId: "43763976438",
//   appId: "1:43763976438:web:2625b277cc7bf0119e84d7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// let map; // Global map variable

// // Function to Initialize Google Map
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 20.5937, lng: 78.9629 }, // Default center (India)
//         zoom: 5,
//     });

//     loadDonations(); // Fetch donation locations from Firebase
// }

// // Fetch donation locations from Firebase
// async function loadDonations() {
//     const querySnapshot = await getDocs(collection(db, "donations"));

//     querySnapshot.forEach(async (doc) => {
//         const data = doc.data();
//         if (data.location && data.pincode) {
//             const address = `${data.location}, ${data.pincode}`;
//             const { lat, lng } = await getLatLngFromAddress(address);
//             if (lat && lng) {
//                 addMarker(lat, lng, data.donorName, data.foodType, data.quantity);
//             }
//         }
//     });
// }

// // Convert Address to Latitude/Longitude using Google Maps API
// async function getLatLngFromAddress(address) {
//     const GOOGLE_MAPS_API_KEY = "AIzaSyACzToaB0biCYPC1G6CnLoIWaVVrrj1mHg"; // Replace with your API key
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status === "OK") {
//             return data.results[0].geometry.location;
//         } else {
//             console.error("Geocoding API Error:", data.status);
//             return { lat: null, lng: null };
//         }
//     } catch (error) {
//         console.error("Error fetching location:", error);
//         return { lat: null, lng: null };
//     }
// }

// // Add marker to the Google Map
// function addMarker(lat, lng, donorName, foodType, quantity) {
//     const marker = new google.maps.Marker({
//         position: { lat, lng },
//         map: map,
//         title: donorName
//     });

//     const infoWindow = new google.maps.InfoWindow({
//         content: `<b>Donor:</b> ${donorName}<br><b>Food:</b> ${foodType}<br><b>Quantity:</b> ${quantity}`
//     });

//     marker.addListener("click", () => {
//         infoWindow.open(map, marker);
//     });
// }

// // Expose initMap globally for Google Maps API
// window.initMap = initMap;



// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgEveamnuk5oqKhEr7pBYLs-JIVzSibX0",
    authDomain: "smart-donation-website.firebaseapp.com",
    projectId: "smart-donation-website",
    storageBucket: "smart-donation-website.appspot.com", // Fixed storage bucket
    messagingSenderId: "43763976438",
    appId: "1:43763976438:web:2625b277cc7bf0119e84d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let map; // Global variable for the map

// Attach initMap to the window object to make it accessible
window.initMap = function () {
    console.log("Google Map initializing...");
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Default center (India)
        zoom: 5,
    });

    loadDonations(); // Fetch donation locations
};

// Fetch donation locations from Firebase
async function loadDonations() {
    try {
        const querySnapshot = await getDocs(collection(db, "donations"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.latitude && data.longitude) {
                addMarker(data.latitude, data.longitude, data.donorName);
            }
        });
    } catch (error) {
        console.error("Error fetching donations:", error);
    }
}

// Add marker to the Google Map
function addMarker(lat, lng, donorName) {
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: donorName
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `<b>Donor:</b> ${donorName}`
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
