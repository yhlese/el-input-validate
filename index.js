import formatNum from './directive';
import formatTel from './directive';
import formatNotTxt from './directive';

function ElInputValidate(Vue) {
  if (!Vue) return;
  Vue.use(formatNum)
  Vue.use(formatTel)
  Vue.use(formatNotTxt)
}
export default ElInputValidate