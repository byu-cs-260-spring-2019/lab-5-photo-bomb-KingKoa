import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyBI6A1srFx4n9R1uryfQPcmv15W1QOz2QI",
  authDomain: "cs260-kekoamontalbo.firebaseapp.com",
  databaseURL: "https://cs260-kekoamontalbo.firebaseio.com",
  projectId: "cs260-kekoamontalbo",
  storageBucket: "cs260-kekoamontalbo.appspot.com",
  messagingSenderId: "401322490486",
  appId: "1:401322490486:web:637b7da129be748a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("setUser", user);
  } else {
    store.commit("setUser", null);
  }
});




