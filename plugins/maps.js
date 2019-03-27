let map;
let InforObj = [];
let markersOnMap = [{
  placeName: "Berlin",
  LatLng: [{
    lat: 52.520008,
    lng: 13.404954
  }]
},
  {
    placeName: "Brussels",
    LatLng: [{
      lat: 50.85045,
      lng: 4.34878
    }]
  },
  {
    placeName: "Athens",
    LatLng: [{
      lat: 37.983810,
      lng: 23.727539
    }]
  },
  {
    placeName: "Bedford",
    LatLng: [{
      lat: 52.136436,
      lng: -0.460739
    }]
  },
  {
    placeName: "Timisoara",
    LatLng: [{
      lat: 45.760696,
      lng: 21.226788
    }]
  },
  {
    placeName: "Rijeka",
    LatLng: [{
      lat: 45.328979,
      lng: 14.457664
    }]
  },
  {
    placeName: "Matera",
    LatLng: [{
      lat: 40.66983,
      lng: 16.59723
    }]
  }
];

let bounds = new google.maps.LatLngBounds();

window.onload = function () {
  initMap();
};

function addMarker() {
  for (let i = 0; i < markersOnMap.length; i++) {
    let contentString = '<div class="font-weight-bold">' + markersOnMap[i].placeName + '</div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    bounds.extend(marker.position);
    map.fitBounds(bounds);
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('mouseover', function () {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });
    marker.addListener('mouseout', function () {
      closeOtherInfo();
      infowindow.close();
      InforObj[0] = infowindow;
    });

    google.maps.event.addDomListener(map, 'tilesloaded', function() {
      infowindow.open(map, marker);
    });
  }
}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById('home-europe-map'));
  addMarker();
}
