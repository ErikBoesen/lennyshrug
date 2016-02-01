document.addEventListener('DOMContentLoaded', function() {
	var buttons = document.getElementsByTagName('button');
	var handler = function(e) {
		var b = e.target;
		var copyFrom = document.createElement('textarea');
		copyFrom.value = b.innerText;
		document.body.appendChild(copyFrom);
		copyFrom.select();
		document.execCommand('copy', true);
		copyFrom.remove();
        window.close();
	};
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', handler);
	}
});