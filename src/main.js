import Vue from 'vue';
import './plugins/axios';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './registerServiceWorker';
import TopMenu from './components/TopMenu.vue';

import 'ant-design-vue/dist/antd.css';

Vue.component('TopMenu', TopMenu);

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
