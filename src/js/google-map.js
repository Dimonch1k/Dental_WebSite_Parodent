function myMap() {
  alert = function () { }
  var Center = new google.maps.LatLng(49.347959, 23.520748);
  var Canvas = document.getElementById("map");
  var Options = { center: Center, zoom: 5 };
  var map = new google.maps.Map(Canvas, Options);
  var marker = new google.maps.Marker({ position: Center });
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}