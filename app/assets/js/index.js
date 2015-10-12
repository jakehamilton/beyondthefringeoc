function initMap() {
  var latLng = {
    lat: 33.5611021,
    lng: -117.6717438
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Sola Salons'
  });
}
