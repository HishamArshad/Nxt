"use server";  
import { redirect } from "next/navigation"

export async function navigate(path) {
  redirect(`/${path}`)
}

export const handleLogin = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Email and Password are required.");
  }

  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login. Please check your credentials.");
  }

  const data = await response.json(); 
  
 
  // Return useful data for the client-side
  return { message: "Login successful!", token: data.token };
};

export const handleLogout = async (token) => {
  const response = await fetch("http://127.0.0.1:8000/api/logout/", {
    method: "GET",
    headers: {
      "Authorization": `Token ${token}`,
    },
    
  });
  if (!response.ok) {
    throw new Error("Failed to login. Please check your credentials.");
  }

  const data = await response.json();
 
  return { message: "Login successful!", token: data };
}


export const handleGoogleAuth = async (code) => {
  // Your Google OAuth2 credentials
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = 'http://localhost:3000/dashboard';  // The URI where Google will redirect after login

  // Make a POST request to exchange the authorization code for tokens
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code: code, // The authorization code from Google
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code', // This tells Google you are exchanging an authorization code
    }),
  });

  // Parse the JSON response from Google
  const data = await response.json();

  if (response.ok) {
    const { id_token } = data;

    // Now send the id_token to your backend for registration
    const regResponse = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken: id_token }), // Send the token as JSON
    });

    const regData = await regResponse.json();

    if (regResponse.ok) {
      // If registration was successful, return the token
      console.log('ID Token from Backend:', regData.token);

      return {
        idToken: regData.token, // return the token from the backend
      };
    } else {
      // Handle error from registration
      console.error('Error during registration:', regData);
      throw new Error('Registration failed');
    }
  } else {
    // Handle error from Google token exchange
    console.error('Error getting tokens:', data);
    throw new Error('Failed to get tokens from Google');
  }
};


export const handleSignup = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const first_name = formData.get("fname")
  const last_name = formData.get("lname")

  if (!email || !password) {
    throw new Error("Email and Password are required.");
  }

  const response = await fetch("http://127.0.0.1:8000/api/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, first_name, last_name }),
  });

  const data = await response.json(); 
  if (!response.ok) {
    throw new Error(data.detail);
  }

  // Return useful data for the client-side
  return { message: data.detail, token: data.token };
};