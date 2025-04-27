// Initialize and add the map
let myMapmap;

async function initMap() {
  // The location of Uluru
  const position = { lat: 36.234312, lng: -115.078338 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("myMap"), {
    zoom: 4,
    center: position,
    mapId: "myMap",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: myMap,
    position: position,
    title: "Uluru",
  });
}

initMap();