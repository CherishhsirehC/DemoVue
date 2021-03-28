<template>
  <div id="map"></div>
  <!-- <div id="map">
    <sm-web-map :map-options="mapOptions">
      <sm-tile-layer :url="url"></sm-tile-layer>
    </sm-web-map>
  </div>-->
</template>
 
<script>
// import Vue from "vue";
// import L from 'leaflet'//main中已全局发导入
// import 'leaflet/dist/leaflet'
// import {tiledMapLayer} from '@supermap/iclient-leaflet'//好像此导入包含了leaflet的导入 全局可用L.函数 不可import后重命名 ===部分模块引入
// import 'leaflet/dist/leaflet.css'
// import Le from 'leaflet'//当前vue文件使用必须当前文件导入
// import 'leaflet/dist/leaflet.css'
// import {SuperMap} from '@supermap/iclient-leaflet'

// import { SuperMap } from "@supermap/iclient-common";
// import iclientLeaflet from '@supermap/iclient-leaflet'
// Vue.use(L);
// Vue.use(iclientLeaflet)
var host = window.isLocal ? window.server : "https://iserver.supermap.io/";
export default {
  name: "mLeaflet",
  data() {
    return {
      url: host + "/iserver/services/map-china400/rest/maps/China",
      mapOptions: {
        center: [35.25, 102.55],
        zoom: 4,
      },
    };
  },
  methods: {
    addMap() {
      var m = L.map("map").setView([36.52, 120.31], 10);
      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken:
            "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
          attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        }
      ).addTo(m);
    },
    addsupermap() {
      var host = window.isLocal ? window.server : "https://iserver.supermap.io";
      var themeService,
        themeGraduatedSymbol,
        themeParameters,
        themeLayer,
        url = host + "/iserver/services/map-china400/rest/maps/China_4326";

      var map = L.map("map", {
        crs: L.CRS.EPSG4326,
        // crs: L.CRS.TianDiTu_WGS84,
        zoomControl: false,
        // center: [40, 117],
        // maxZoom: 18,
        // zoom: 7
        // center: [39, 100],
        center: [37.7490234375, 108.0615234375],
        maxZoom: 17,
        minZoom: 3,
        zoom: 3,
        // maxBounds: L.latLngBounds(L.latLng(90, 180), L.latLng(-90, -180)),
      });
      L.control
        .zoom({
          zoomInTitle: "放大",
          zoomOutTitle: "缩小",
          position: "topright",
        })
        .addTo(map);
      L.supermap.tiledMapLayer(url).addTo(map);
      // L.supermap.tiandituTileLayer({
      //     key: "1d109683f4d84198e37a38c442d68311",
      //     layerType: 'vec',
      //     isLabel: true
      // }).setZIndex(2).addTo(map);
      // L.supermap
      //   .tiandituTileLayer({
      //     key: "1d109683f4d84198e37a38c442d68311",
      //     layerType: "vec",
      //     isLabel: false,
      //   })
      //   .addTo(map);
    },
  },
  mounted() {
    // this.addMap();
    this.addsupermap();
  },
};
</script>
<style  scoped>
#map {
  width: 1567px;
  height: 750px;
}
</style>