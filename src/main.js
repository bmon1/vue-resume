import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router and its functions


loadFonts()

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
    // Define more routes as needed
  ]
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
