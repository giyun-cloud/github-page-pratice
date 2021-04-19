function initMap() {
  const pos = { lat: 37.782234, lng: -122.391245 }
  const map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 18,
    scrollwheel: false
  });
  new google.maps.Marker({
    position: pos,
    map: map,
    title: 'GitHub'
  });
}
