import L from 'leaflet'

export const tileLayer = async (center, page) => {
  const zoom = page === "index" ? 14 : 16
  const view = {zoom: zoom, lat: center[0], long: center[1]}
  const map = L.map('map').setView([view.lat, view.long], view.zoom)
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1IjoiaGFycmlzb25tYWxvbmUiLCJhIjoiY2toYjc2ZzN0MDd6aTJ5bXAyN3BtYzkyZyJ9.PjmL36u36HQt9SDwZojPfA"
  }).addTo(map)
  return map
}