$ = require('./plugins/jquery');
$(window.document).ready(function () {
    var map = new BMap.Map('map'),
        shenZhenLatitude = 116.404,
        shenZhenLongitude = 39.915,
        mapZone = 15,
        point = new BMap.Point(shenZhenLatitude, shenZhenLongitude);
    map.centerAndZoom(point, mapZone);
});