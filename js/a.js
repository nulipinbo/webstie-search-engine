function search() {
	var content = document.getElementById("content").value; 
	var engine = document.getElementById("engine").value;
	var url; 
	if("google"===engine){
		url = "https://www.google.com/search?&q=";
	} else if("baidu"===engine){
		url = "https://www.baidu.com/s?wd=";
	} else if("bing"===engine){
		url = "https://cn.bing.com/search?ensearch=1&q=";
	} else if("stackoverflow"===engine){
		url = "https://stackoverflow.com/search?q=";
	}else{
		return;
	}
	window.location.href = url + content;
}

document.onkeydown = function(e){
	var ev = document.all ? window.event : e;
	if(ev.keyCode==13) {
	    search();
	}
}