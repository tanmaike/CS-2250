import React from 'react';
import {useState} from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_kc0qjQ6IzSYFxO1v0FE8zHkCDIQkgCk",
  authDomain: "michael-test-project-fbc84.firebaseapp.com",
  projectId: "michael-test-project-fbc84",
  storageBucket: "michael-test-project-fbc84.appspot.com",
  messagingSenderId: "283807172502",
  appId: "1:283807172502:web:ac3ce9294517fb54d63fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Chat = () => {
    const [user, setUser] = useState();

    const ChatRoom = () => {
        return (<p>This is a chatroom</p>)
    }

    const SignIn = () => {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                setUser(document.getElementById('name').value);
            }}>
                <input type="text" id="name" placeholder="Enter your name" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
  return (
    <div>
        <h1>Chat with me</h1>
        {user ? <ChatRoom /> : <SignIn />}
    </div>
  )
}
