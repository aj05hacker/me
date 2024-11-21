// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_qJRuDNQKgKf_mA1hseyK0Z5BwIX6OfA",
    authDomain: "portfolio-abdulhajees.firebaseapp.com",
    projectId: "portfolio-abdulhajees",
    storageBucket: "portfolio-abdulhajees.appspot.com",
    messagingSenderId: "840855826809",
    appId: "1:840855826809:web:4dfb8a929c2c9c490affa8",
    measurementId: "G-RF9R25QKVK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to Increment Counter
const incrementCounter = async () => {
  const visitKey = 'visitedBefore';
  
  // Check if the user has already visited
  if (localStorage.getItem(visitKey)) {
    return; // Do nothing if they have already visited
  }

  try {
    const counterDocRef = db.collection('siteData').doc('visitCounter');
  
    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(counterDocRef);
      if (!doc.exists) {
        transaction.set(counterDocRef, { count: 1 });
      } else {
        const newCount = (doc.data().count || 0) + 1;
        transaction.update(counterDocRef, { count: newCount });
      }
    });

    const updatedDoc = await counterDocRef.get();
    document.getElementById('visitCounter').innerText = `Visits: ${updatedDoc.data().count}`;
    
    // Mark the user as visited
    localStorage.setItem(visitKey, 'true');
  } catch (error) {
    console.error("Error updating counter: ", error);
    document.getElementById('visitCounter').innerText = "Error loading counter!";
  }
};

// Call the function to increment the counter
window.onload = incrementCounter;
