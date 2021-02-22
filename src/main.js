import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyApOA7dltxayx0dbP7jsE6k8zNDAuoDsu4",
  authDomain: "ed-chat-webapp.firebaseapp.com",
  projectId: "ed-chat-webapp",
  storageBucket: "ed-chat-webapp.appspot.com",
  messagingSenderId: "189859204369",
  appId: "1:189859204369:web:eda08f7a4fcff6220350b0",
  measurementId: "G-0FGW19YQST"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Init Firestore
var db = firebase.firestore();
window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
