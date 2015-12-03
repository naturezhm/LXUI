/**
 * 通用js浏览器工具类
 * 
 */
var browserUtil = {};

browserUtil.isIE = function(ver) {
	var ieTester = document.createElement('ieTester')
    ieTester.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
    return ieTester.getElementsByTagName('i').length === 1
};

browserUtil.isBeforIE = function(ver) {
	var ieTester = document.createElement('ieTester2')
    ieTester.innerHTML = '<!--[if lt IE ' + ver + ']><i></i><![endif]-->'
    return ieTester.getElementsByTagName('i').length === 1
}