import {formatNum, formatTel, formatNotInputTxt} from './format';
var {set} = require('lodash');

export default {
  install(Vue: any) {
    /**
     * @description 自定义 限制输入框 只能输入数字 且 限制后几位
     * @param 0 1 2 （默认保留两位）
     * @example  <el-input v-model="ruleForm.fee" v-formatNum:2="ruleForm.fee"></el-input>
     *
     */
    Vue.directive('formatNum', {
      update(el: any, {value, expression, arg}: any, {context}: any) {
        let keys = expression.split('.');
        set(context, keys, formatNum(value, arg));
      },
    });

    /**
     * @description 自定义 限制输入框 只能输入数字和短横线
     * @example  <el-input v-model="customQuery.tel" v-formatTel="customQuery.tel"></el-input>
     *
     */
    Vue.directive('formatTel', {
      update(el: any, {value, expression}: any, {context}: any) {
        let keys = expression.split('.');
        set(context, keys, formatTel(value));
      },
    });

    /**
     * @description 自定义 限制输入框 不能输入中文
     * @example  <el-input v-model="customQuery.tel" v-formatTel="customQuery.tel"></el-input>
     *
     */
    Vue.directive('formatNotTxt', {
      update(el: any, {value, expression}: any, {context}: any) {
        let keys = expression.split('.');
        value && set(context, keys, formatNotInputTxt(value));
      },
    });
  },
};
