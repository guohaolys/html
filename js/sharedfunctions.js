fill_footer()
function fill_footer(){

	t = ''
	t += '<div style=\'float:left;\' >'
	t += '2015-' + new Date().getFullYear() + ' 郭浩. All rights reserved.'
	t += '</div>'
	t += '<div style=\'float:right;\' >'
	t += '地信131班网页设计同学一起设计与制作.'
	t += '</div>'

	document.getElementById('footer').innerHTML = t
}