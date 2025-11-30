# 🔍 Multimodal Link Verification 

Demo Link: https://mlvsystem.netlify.app

A simple web application that uses Google's **Gemini AI** to verify claims from URLs, text, or images in real-time. This demo showcases a secure serverless architecture for AI-powered verification.

---

## ✨ What It Does

This app verifies claims using a multimodal approach:

1.  **Input:** You provide a link, text claim, or upload an image.
2.  **Process:** The app securely sends the input to the Gemini AI model, which uses Google Search to find credible sources.
3.  **Output:** You get an instant, graded verdict (e.g., True, Misleading, False) and a simple rationale.

### Key Technology Highlights

* **Secure API:** Uses a **Netlify Serverless Function** (proxy) to hide the sensitive Gemini API key.
* **Real-Time Status:** Uses **Firebase Firestore** to manage and instantly update the job status on the screen.

---

## 🛠️ Quick Setup (Get It Running)

This project requires a **Gemini API Key** and a **Firebase Project** set up for Firestore and Anonymous Authentication.

### 1. File Structure

Ensure your project is structured correctly for Netlify Functions:

your-project-root/ ├── index.html ├── netlify.toml └── netlify/ └── functions/ └── gemini.js


### 2. Deployment Steps

1.  **Firebase Config:** Update the `LOCAL_FIREBASE_CONFIG` object in the `<script>` block of your `index.html` with your project's credentials.
2.  **Connect Repo:** Connect your GitHub repository to Netlify.
3.  **Set Environment Variable:** In your Netlify dashboard, you **must** set the following environment variable for the serverless function to work:
    * **Key:** `GEMINI_API_KEY`
    * **Value:** `[Your actual Gemini API Key]`

---

## 🔒 Mandatory Security Rules

To keep user data private and secure, you **MUST** apply the following rules in your Firebase Firestore console:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artifacts/{appId}/users/{userId}/verification_jobs/{jobId} {
      // Allows users to read and write only their own data
      allow read, write: if request.auth.uid == userId;
    }
    // Deny all other access by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
