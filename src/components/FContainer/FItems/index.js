
import Vue from 'vue';
// https://cn.vuejs.org/v2/style-guide/?#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90

const components = require.context('./', true, /^\.+\/F.+\.vue$/);

components.keys().forEach((item) => {
  console.log(components(item));

  let baseComponentConfig = components(item);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName = baseComponentConfig.name || (
    item
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  );
  Vue.component(baseComponentName, baseComponentConfig);
});
