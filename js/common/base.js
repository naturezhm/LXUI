define(["jquery", "bootstrap"], function(jquery, bootstrap)
{
    console.log("你已难逃一吸");
    console.log($);
    console.log("sss jquery " + jquery);
    // 传入参数需要return才会被后面应用的调用到$属于全局
    return {
    	jquery:jquery,
    	bootstrap: bootstrap
    };
});