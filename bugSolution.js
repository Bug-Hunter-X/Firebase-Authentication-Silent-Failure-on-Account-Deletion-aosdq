The solution involves implementing proper error handling using `onAuthStateChanged` and checking for the `auth/user-disabled` error code.  Here's how you can modify the code:

```javascript
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      const querySnapshot = await getDocs(collection(db, "yourCollection"));
      // Process data...
    } catch (error) {
      if (error.code === "auth/user-disabled") {
        // Handle user account disabled scenario
        console.error("User account disabled:", error);
        // Sign out the user
        await auth.signOut();
        // Redirect to login page or show an appropriate message to the user
        // ...
      } else {
        // Handle other errors
        console.error("Error accessing data:", error);
        // Display an appropriate message to the user
        // ...
      }
    }
  } else {
    // User is signed out
    // ...
  }
});
```
This solution ensures that if the `auth/user-disabled` error is caught, the application gracefully handles the situation by signing out the user and providing appropriate feedback.  Remember to replace `"yourCollection"` with the name of your Firestore collection.