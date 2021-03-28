<template>
  <div>
    <!-- 欢迎来到首页 -->
    <!-- 超图三维地球viewer -->
    <sm-viewer @ready="ready" navigation fullscreenButton></sm-viewer>
  </div>
</template>
 
<script>
import Vue from "vue";
import SuperMapCesium from "vue-cesium-supermap";

Vue.use(SuperMapCesium, {
  cesiumPath: "../../Cesium-1.71/Build",
});

//
// import SuperMapCesium from 'vue-cesium-supermap'

// Vue.use(SuperMapCesium,{
//   cesiumPath:"/static/Ceisum"
// })
export default {
  methods: {
    ready(cesiumInstance) {
      var Cesium = cesiumInstance.Cesium;
      var viewer = cesiumInstance.viewer;
      var scene = viewer.scene;
      viewer.imageryLayers.addImageryProvider(
        new Cesium.BingMapsImageryProvider({
          url: "https://dev.virtualearth.net",
          mapStyle: Cesium.BingMapsStyle.AERIAL,
          key:
            "AhLx52IuZUuca_C3zK2TzBG2eu1vihUkayqc_e4MISbXZyn5Zw_X--odRqrweVap",
        })
      );
      var urlStr =
        "http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace";
      scene.open(urlStr);
      scene.camera.setView({
        //将经度、纬度、高度的坐标转换为笛卡尔坐标
        destination: new Cesium.Cartesian3(
          -2653915.6463913363,
          3571045.726807149,
          4570293.566342328
        ),
        orientation: {
          heading: 2.1953426301495345,
          pitch: -0.33632707158103625,
          roll: 6.283185307179586,
        },
      });
    },
  },
};
</script>