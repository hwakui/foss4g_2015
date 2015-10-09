var viewer = new Cesium.Viewer('cesiumContainer');

//ƒ|ƒCƒ“ƒg‚ð’Ç‰Á

var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});