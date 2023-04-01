navigator.geolocation.getCurrentPosition(function (pos) {
    initMap(pos.coords.latitude,pos.coords.longitude);

},function(){console.log("Allow Location");})

function initMap(x,y) {
    const myLatLng = { lat: x, lng: y };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;
  