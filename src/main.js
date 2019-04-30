import Vue from 'vue';
import './plugins/axios';
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';
import store from './store/store';
import './registerServiceWorker';
import TopMenu from './components/TopMenu.vue';


import 'ant-design-vue/dist/antd.css';

Vue.component('TopMenu', TopMenu);

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
