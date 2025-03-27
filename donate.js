// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgEveamnuk5oqKhEr7pBYLs-JIVzSibX0",
  authDomain: "smart-donation-website.firebaseapp.com",
  projectId: "smart-donation-website",
  storageBucket: "smart-donation-website.firebasestorage.app",
  messagingSenderId: "43763976438",
  appId: "1:43763976438:web:2625b277cc7bf0119e84d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Ensure user is logged in before allowing donation submission
onAuthStateChanged(auth, (user) => {
    if (!user) {
        alert("Please sign in before donating.");
        return;
    }
});

// Form Submission Event Listener
document.getElementById("donationForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    let donorName = document.getElementById("donorName").value.trim();
    let foodType = document.getElementById("foodType").value.trim();
    let quantity = document.getElementById("quantity").value.trim();
    let location = document.getElementById("location").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let contactNumber = document.getElementById("contactNumber").value.trim();

    // Validate input fields
    if (!donorName || !foodType || !quantity || !location || !pincode || !contactNumber) {
        document.getElementById("message").innerText = "All fields are required!";
        return;
    }

    try {
        // Store Data in Firestore
        await addDoc(collection(db, "donations"), {
            donorName,
            foodType,
            quantity,
            location,
            pincode,
            contactNumber,
            status: "unclaimed",
            timestamp: new Date()
        });

        // Confirmation Message
        document.getElementById("message").innerText = "Donation submitted successfully!";
        document.getElementById("donationForm").reset();

    } catch (error) {
        console.error("Error adding document: ", error);
        document.getElementById("message").innerText = "Error submitting donation. Check console.";
    }
});
