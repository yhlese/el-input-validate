function _regFormat(str, reg) {
  if (!str) return;
  str = str.toString();
  if (str.length < 0) {
    return '';
  }
  const i = str.indexOf('.');
  let arr;
  if (i !== -1) {
    str.replace(/./g, '$');
    str.replace(/./g, '');
    str.replace(/$/g, '.');
    arr = str.split('.');
    str = arr[0];
  }
  const newStr = str.replace(reg, '');
  const newStrFlot = arr && arr[1].replace(reg, '');
  return i !== -1 ? newStr + newStrFlot.slice(0, 0) : newStr;
}

// 输入框校验
function formatNum(str, float = 2) {
  if (!str) return;
  str = str.toString();
  if (str.length > 1 && str.charAt(0) === '0' && str.charAt(1) !== '.') {
    return '';
  }
  const i = str.indexOf('.');
  let arr;
  if (i !== -1) {

    str.replace(/./g, '$');
    str.replace(/./g, '');
    str.replace(/$/g, '.');
    arr = str.split('.');
    str = arr[0];
  }
  const reg = /[^0-9]*/g;
  let newStr = str.replace(reg, '');
  newStr = float === 0 ? str.slice(0, str.length) : newStr;
  const newStrFlot = arr && arr[1].replace(reg, '');
  return float !== 0 && i !== -1 ? newStr + '.' + newStrFlot.slice(0, float) : newStr;
}

function formatTel(str) {
  return _regFormat(str, /[^0-9-]*/g)
}

function formatNotInputTxt(str) {
  return _regFormat(str, /[\u4E00-\u9FA5]/g)
}





export {
  formatNum,
  formatTel,
  formatNotInputTxt
}