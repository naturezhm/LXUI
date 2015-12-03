/**
 * 全局配置项，指定模块路径
 * baseUrl的优先级:require.config>data-main>html文件路径
 * 如果模块包含如下的字符,不按照baseUrl+paths的方式来寻找模块,而是采用全路径(URL)的方式:
 * 1.如果以".js"结尾
 * 2.如果以"/"开头
 * 3.如果以"http:"或者"https:"开头
 */
 var paths = {
  "base" : "common/base",
  "jquery" : "lib/jquery2.min", // 如是IE6则要使用jquery1.min
  "respond" : "lib/respond.min", // bootstrap IE8 支持
  "html5shiv" : "lib/html5shiv.min",// bootstrap IE8 支持
  "bootstrap" : "lib/bootstrap.min"
};

function beforLoadRequire() {
	console.log(" Before load require");
 	//IE特殊化模块
 	if(!browserUtil.isIE()) {
 		return;
 	}
 	if(browserUtil.isBeforIE(9)) {
 		paths["jquery"] = "lib/jquery1.min";
 		paths["bootstrap"] = "lib/bootstrap.min";
 	}
 	/// 如果需要兼容IE6 再在此处做处理，目前只兼容IE8
}

beforLoadRequire();

require.config(
{
    "baseUrl": "js",
    /*所用的公共库*/
    "paths": paths,
    // 非AMD规范的js输出对象
    "shim": 
    {
        "bootstrap": ["jquery"]
    },
    waitSeconds:7 //超时时间，默认7秒
});
// 加载默认的公共基础模块common/base.js
//require(["./common/base"]);