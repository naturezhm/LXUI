require(["base"], function(){
	console.log("this is index");
	console.log( " index " +$);
 	if(browserUtil.isBeforIE(9)) {
 		require(["html5shiv", "respond"]);
 	}
});