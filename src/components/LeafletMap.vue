<template>
  <div class="h-352p h-md-436p" :id="mapId"></div>
</template>

<script>
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import IconTour from '../assets/images/map/Property 1=tour.svg';

export default {
  props: {
    mapId: String, 
    lat: Number,
    lon: Number,
    places: Array,
  },
  data() {
    return {
      map: {},
      markersGroup: [],
    }
  },
  methods: {
    renderMap() {
      this.markersGroup.clearLayers();
      this.map.setView([this.lat, this.lon], 15);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 24,
        attribution: '© OpenStreetMap'
      }).addTo(this.map);

      const myIcon = L.icon({
        iconUrl: IconTour,
        iconSize: [48, 48],
      });
      this.places.forEach(item => {
        const marker = L.marker([
          item.Position.PositionLat, item.Position.PositionLon],
          { icon: myIcon });
        const popupContent = 
        `<div>
          <a href="#/spot/${item.ScenicSpotID}">
            <img src="${item.Picture.PictureUrl1}"
            alt="spot-img"
            class="mb-1 w-148p h-100p" />
            <h3 class="fw-bold fs-7 text-gray-700">
              ${item.ScenicSpotName}
            </h3>
          </a>
         </div>`;
        marker.bindPopup(
          popupContent, {
            maxWidth: 148,
            minWidth: 148,
         }).addTo(this.markersGroup);
        const { PositionLat } = item.Position;
        if (PositionLat === this.lat) {
          marker.openPopup();
        }
      });
    }
  },
  watch: {
    lat() {
      this.renderMap();
    },
  },
  mounted() {
    this.map = L.map(this.mapId, {
      zoomAnimation: false
    });
    this.markersGroup = L.layerGroup().addTo(this.map);
    this.renderMap();
  },
}
</script>