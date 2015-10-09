var viewer = new Cesium.Viewer('cesiumContainer');


//視点の変更

viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.50022, 35.91546, 15000.0)});

//ポイントを追加

var mainpoint = viewer.entities;


mainpoint.add({

        position : Cesium.Cartesian3.fromDegrees(139.50022, 35.91546),

        point : {

            pixelSize : 20,

            color : Cesium.Color.BLUE
        }
    
});

var point = viewer.entities;


point.add({

        position : Cesium.Cartesian3.fromDegrees(138.59053, 36.35607),

        point : {

            pixelSize : 20,

            color : Cesium.Color.GREEN
        }
    
});

var point2 = viewer.entities;


point2.add({

        position : Cesium.Cartesian3.fromDegrees(138.58719, 36.41000),

        point : {

            pixelSize : 10,

            color : Cesium.Color.YELLOW

        }
    
});