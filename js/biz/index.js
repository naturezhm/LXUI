require(["base", "bootbox"], function(base, bootbox){
	console.log("this is index");
	console.log( " index $ " +$);
	console.log( " index jquery" + base.jquery);

 	if(browserUtil.isBeforIE(9)) {
 		require(["html5shiv", "respond"]);
 	}
 	$("#btn-tool-tip").tooltip();
 	bootbox.alert("Your message here…");

 	$("#btn-tool-tip").on("click", showBootBox);

 	function showBootBox(event) {
 		console.log("click " + event);
 		bootbox.dialog({
		  /**
		   * @required String|Element
		   */
		  message: "I am a custom dialog",
		  title: "Custom title",
		  onEscape: function() {},
		  show: true,
		  backdrop: true,
		  closeButton: true,
		  animate: true,
		  className: "my-modal",
		  buttons: {
		    success: {   
		      label: "Success!",
		      
		      className: "btn-success",
		      callback: function() {}
		    },
		    "Danger!": {
		      className: "btn-danger",
		      callback: function() {}
		    },
		    
		    "Another label": function() {}
		  }
		});
 	}

});

require(["domReady!"],function(doc){
	alert(" this is dom ready.");
});