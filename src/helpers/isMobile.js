export const isAndroid = () => window.navigator.userAgent.match(/Android/i);
export const isBlackberry = () => window.navigator.userAgent.match(/BlackBerry/i);
export const isIOS = () => window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
export const isOpera = () => window.navigator.userAgent.match(/Opera Mini/i);
export const isWindows = () => window.navigator.userAgent.match(/IEMobile/i);
export const isAny = () => {
  return isAndroid() || isBlackberry() || isIOS() || isOpera() || isWindows();
};
