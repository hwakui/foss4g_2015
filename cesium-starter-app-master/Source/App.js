//�n���@�^�C���ǂݍ���

var viewer = new Cesium.Viewer('cesiumContainer', {
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('�n���@�^�C��', '', 'http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker: false
});


//���_�̕ύX

viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.50022, 35.91546, 15000.0)});

//�|�C���g��ǉ�

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

//���C����ǉ�

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