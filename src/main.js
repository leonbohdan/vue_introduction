import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import router from './router';
import 'materialize-css';

firebase.initializeApp({
  apiKey: 'AIzaSyBBlqvZvqWqv0dzUV4EAajhT52nOMYpVxA',
  authDomain: 'leoyar-portfolio-api-test.firebaseapp.com',
  databaseURL: 'https://leoyar-portfolio-api-test-default-rtdb.firebaseio.com',
  projectId: 'leoyar-portfolio-api-test',
  storageBucket: 'leoyar-portfolio-api-test.appspot.com',
  messagingSenderId: '1043284918238',
  appId: '1:1043284918238:web:b7f1fd1c7c1b00aa42a74f',
  measurementId: 'G-Y49T5Q7LGD',
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
