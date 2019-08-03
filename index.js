import formatNum from './src/directive';
import formatTel from './src/directive';
import formatNotTxt from './src/directive';

function ElInputValidate(Vue) {
  if (!Vue) return;
  Vue.use(formatNum)
  Vue.use(formatTel)
  Vue.use(formatNotTxt)
}
export default ElInputValidate