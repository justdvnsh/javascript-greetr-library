var g = G$("John","","es");
g.greet(true).setLang('en').greet()

$("#login").click(function() {
	var loginGrtr = G$('','','')
	$("#logindiv").hide();
	loginGrtr.setLang($('#lang').val()).HTMLgreeting("#greeting", true).log();
});
