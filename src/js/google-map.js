function myMap() {
  alert = function () { }
  let Center = new google.maps.LatLng(49.347959, 23.520748);
  let Canvas = document.getElementById("map");
  let Options = { center: Center, zoom: 5 };
  let map = new google.maps.Map(Canvas, Options);
  let marker = new google.maps.Marker({ position: Center });
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}