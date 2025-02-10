# Firebase Authentication Silent Failure on Account Deletion

This repository demonstrates a bug in the Firebase Authentication SDK where silent failures can occur if a user's account is deleted after login but before subsequent authenticated operations. The code examples show how this issue manifests and a solution to mitigate it.

## Bug Description
The Firebase Authentication SDK doesn't consistently handle cases where a user's account is deleted after successful login.  Subsequent operations requiring authentication, such as accessing Firestore data, may fail silently without providing any error feedback to the user or the application.

## Solution
The solution involves adding robust error handling and account status checks to ensure that the application gracefully handles these situations and provides appropriate feedback to the user. Specifically, the solution includes consistently checking the `currentUser` status and handling `auth/user-disabled` errors explicitly.