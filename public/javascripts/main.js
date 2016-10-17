$ = require('./jquery');
$(window.document).ready(function () {
	var map = new BMap.Map("map");
	var point = new BMap.Point(116.404, 39.915);
	map.centerAndZoom(point, 15);
});