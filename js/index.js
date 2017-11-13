window.onload = function() {
	function $(_id){
		return document.getElementById(_id);
	}
	var nav = $('nav');
	var txt = $('txt');
	var ul1 = $('ul1');
	var item = ul1.getElementsByTagName('img');
	var lis = document.getElementsByTagName('li')
	var contents = txt.getElementsByTagName('div')
	//点击nav盒子注册事件
	
	nav.onmouseover = function(e) {
		e = e || window.event;
		var currObj = e.target || e.srcElement;
		if(currObj.className != 'item')
			return;
		for(var i = 0;i < lis.length;i ++){
			lis[i].style.border = '';
		}
		currObj.parentElement.style.border = '4px solid #F8E60D';
		for(var i = 0;i < item.length;i ++){
			(function(index) {
				lis[index].onclick = function() {
					for (var i = 0;i < contents.length;i ++) {
					contents[i].style.display = 'none';
					}
					contents[index].style.display = 'block';
				}
			})(i);
		}
				
	}
	
}