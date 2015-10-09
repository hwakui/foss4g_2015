//地理院タイル読み込み

var viewer = new Cesium.Viewer('cesiumContainer', {
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker: false
});


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

//ラインを追加

var line = viewer.entities;


line.add({

    name : 'Let's go!',

    polyline : {

        positions : Cesium.Cartesian3.fromDegreesArray([139.50022, 35.91546,
 138.59053, 36.35607]),

        width : 4,

        material : Cesium.Color.RED

    }
});

var line2 = viewer.entities;


line2.add({

    name : 'Let's go!',

    polyline : {

        positions : Cesium.Cartesian3.fromDegreesArray([138.58719, 36.41000,
 138.59053, 36.35607]),

        width : 4,

        material : Cesium.Color.PINK

    }
});