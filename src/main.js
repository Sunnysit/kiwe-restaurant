import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import firebaseSetting from './firebase/fbconfig';
import firebase from 'firebase';


Vue.config.productionTip = false


// Initialize Firebase
firebase.initializeApp(firebaseSetting.firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
