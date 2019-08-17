function browser_name(){
      var browser_id = navigator.userAgent;    
      // перечень условий
    if (browser_id.search(/Chrome/) != -1) return 'Google Chrome';
    if (browser_id.search(/Firefox/) != -1) return 'Firefox';
    if (browser_id.search(/Opera/) != -1) return 'Opera';
    if (browser_id.search(/Safari/) != -1) return 'Safari';
    if (browser_id.search(/MSIE/) != -1) return 'Internet Explorer';
    
    return 'Не определен';
}


	var browser = browser_name();// даелее проверям если браузер Google Chrome то выводим соответствующий фрагмент кода при помощи document.write
	if (browser=="Google Chrome") {
		    document.write(' ');
	}
	
	//и так для каждого браузера
	else if (browser=="Firefox") {
		document.write('<style>.section-title{font-weight: 400}.helpful__text strong{font-weight: 400;}.interview__title{font-weight: 400;}</style>');
	}
	
	else if (browser=="Safari") {
		    document.write('>');
	}
	
	else if (browser=="Internet Explorer") {
		    document.write('');
	}
	
	else if (browser=="Opera") {
		    document.write('');
	}
	
	else{
		document.write('');
	}
