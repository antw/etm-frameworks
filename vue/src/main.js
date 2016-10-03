// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload';

import store from './stores';

import App from './App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import styles.
import './styles/style.styl';

Vue.use(VueRouter);

Vue.use(VueLazyload, {
  loading: '/static/spin.svg',
});

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/view/:postId', component: Single },
  { path: '', component: PhotoGrid },
];

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  // Use HTML5 history mode; requires server support.
  mode: 'history',
  // Back button returns page to previous (saved) position, if present.
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

// Now we can start the app!
/* eslint-disable no-new */
new Vue({ el: '#app', router, store, ...App });
