// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_qJRuDNQKgKf_mA1hseyK0Z5BwIX6OfA",
    authDomain: "portfolio-abdulhajees.firebaseapp.com",
    projectId: "portfolio-abdulhajees",
    storageBucket: "portfolio-abdulhajees.appspot.com", // Fixed `storageBucket` domain
    messagingSenderId: "840855826809",
    appId: "1:840855826809:web:4dfb8a929c2c9c490affa8",
    measurementId: "G-RF9R25QKVK"
  };
  
  // Firebase Initialization
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Function to Increment Counter
  const incrementCounter = async () => {
    try {
      // Reference the Firestore document
      const counterDocRef = db.collection('siteData').doc('visitCounter');
  
      // Perform a transaction to update the counter
      await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(counterDocRef);
        if (!doc.exists) {
          // If document does not exist, create it with an initial count
          transaction.set(counterDocRef, { count: 1 });
        } else {
          // Increment the counter
          const newCount = (doc.data().count || 0) + 1;
          transaction.update(counterDocRef, { count: newCount });
        }
      });
  
      // Fetch the updated count and display it
      const updatedDoc = await counterDocRef.get();
      const updatedCount = updatedDoc.data().count;
      document.getElementById('visitCounter').innerText = `Visits: ${updatedCount}`;
    } catch (error) {
      console.error("Error updating counter: ", error);
      document.getElementById('visitCounter').innerText = "Error loading counter!";
    }
  };
  
  // Call the function to increment the counter
  window.onload = incrementCounter;
  
