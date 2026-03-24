var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BD_URB_Teleton_1 = new ol.format.GeoJSON();
var features_BD_URB_Teleton_1 = format_BD_URB_Teleton_1.readFeatures(json_BD_URB_Teleton_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BD_URB_Teleton_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BD_URB_Teleton_1.addFeatures(features_BD_URB_Teleton_1);
cluster_BD_URB_Teleton_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BD_URB_Teleton_1
});
var lyr_BD_URB_Teleton_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BD_URB_Teleton_1, 
                style: style_BD_URB_Teleton_1,
                popuplayertitle: 'BD_URB_Teleton',
                interactive: true,
    title: 'BD_URB_Teleton<br />\
    <img src="styles/legend/BD_URB_Teleton_1_0.png" /> AGUASCALIENTES<br />\
    <img src="styles/legend/BD_URB_Teleton_1_1.png" /> BAJA CALIFORNIA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_2.png" /> BAJA CALIFORNIA SUR<br />\
    <img src="styles/legend/BD_URB_Teleton_1_3.png" /> CAMPECHE<br />\
    <img src="styles/legend/BD_URB_Teleton_1_4.png" /> CHIAPAS<br />\
    <img src="styles/legend/BD_URB_Teleton_1_5.png" /> CHIHUAHUA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_6.png" /> CIUDAD DE M�XICO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_7.png" /> COAHUILA DE ZARAGOZA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_8.png" /> COLIMA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_9.png" /> DURANGO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_10.png" /> GUANAJUATO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_11.png" /> GUERRERO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_12.png" /> HIDALGO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_13.png" /> JALISCO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_14.png" /> MICHOAC�N DE OCAMPO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_15.png" /> MORELOS<br />\
    <img src="styles/legend/BD_URB_Teleton_1_16.png" /> M�XICO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_17.png" /> NAYARIT<br />\
    <img src="styles/legend/BD_URB_Teleton_1_18.png" /> NUEVO LE�N<br />\
    <img src="styles/legend/BD_URB_Teleton_1_19.png" /> OAXACA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_20.png" /> PUEBLA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_21.png" /> QUER�TARO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_22.png" /> QUINTANA ROO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_23.png" /> SAN LUIS POTOS�<br />\
    <img src="styles/legend/BD_URB_Teleton_1_24.png" /> SINALOA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_25.png" /> SONORA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_26.png" /> TABASCO<br />\
    <img src="styles/legend/BD_URB_Teleton_1_27.png" /> TAMAULIPAS<br />\
    <img src="styles/legend/BD_URB_Teleton_1_28.png" /> TLAXCALA<br />\
    <img src="styles/legend/BD_URB_Teleton_1_29.png" /> VERACRUZ DE IGNACIO DE LA LLAVE<br />\
    <img src="styles/legend/BD_URB_Teleton_1_30.png" /> YUCAT�N<br />\
    <img src="styles/legend/BD_URB_Teleton_1_31.png" /> ZACATECAS<br />\
    <img src="styles/legend/BD_URB_Teleton_1_32.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BD_URB_Teleton_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BD_URB_Teleton_1];
lyr_BD_URB_Teleton_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nombre de': 'Nombre de', 'C�digo d': 'C�digo d', 'Nombre d_1': 'Nombre d_1', 'Descripcio': 'Descripcio', 'Tipo de vi': 'Tipo de vi', 'Nombre d_2': 'Nombre d_2', 'Tipo de en': 'Tipo de en', 'Nombre d_3': 'Nombre d_3', 'Tipo de _1': 'Tipo de _1', 'Nombre d_4': 'Nombre d_4', 'Tipo de _2': 'Tipo de _2', 'Nombre d_5': 'Nombre d_5', 'N�mero e': 'N�mero e', 'Letra exte': 'Letra exte', 'Edificio': 'Edificio', 'Edificio P': 'Edificio P', 'N�mero i': 'N�mero i', 'Letra inte': 'Letra inte', 'Tipo de as': 'Tipo de as', 'Nombre d_6': 'Nombre d_6', 'Tipo centr': 'Tipo centr', 'Corredor i': 'Corredor i', 'N�mero d': 'N�mero d', 'C�digo P': 'C�digo P', 'Clave enti': 'Clave enti', 'Entidad fe': 'Entidad fe', 'Clave muni': 'Clave muni', 'Municipio': 'Municipio', 'Clave loca': 'Clave loca', 'Localidad': 'Localidad', '�rea geo': '�rea geo', 'Manzana': 'Manzana', 'N�mero_1': 'N�mero_1', 'Correo ele': 'Correo ele', 'Sitio en I': 'Sitio en I', 'Tipo de es': 'Tipo de es', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de i': 'Fecha de i', });
lyr_BD_URB_Teleton_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Nombre de': 'TextEdit', 'C�digo d': 'TextEdit', 'Nombre d_1': 'TextEdit', 'Descripcio': 'TextEdit', 'Tipo de vi': 'TextEdit', 'Nombre d_2': 'TextEdit', 'Tipo de en': 'TextEdit', 'Nombre d_3': 'TextEdit', 'Tipo de _1': 'TextEdit', 'Nombre d_4': 'TextEdit', 'Tipo de _2': 'TextEdit', 'Nombre d_5': 'TextEdit', 'N�mero e': 'TextEdit', 'Letra exte': 'TextEdit', 'Edificio': 'TextEdit', 'Edificio P': 'TextEdit', 'N�mero i': 'TextEdit', 'Letra inte': 'TextEdit', 'Tipo de as': 'TextEdit', 'Nombre d_6': 'TextEdit', 'Tipo centr': 'TextEdit', 'Corredor i': 'TextEdit', 'N�mero d': 'TextEdit', 'C�digo P': 'TextEdit', 'Clave enti': 'TextEdit', 'Entidad fe': 'TextEdit', 'Clave muni': 'TextEdit', 'Municipio': 'TextEdit', 'Clave loca': 'TextEdit', 'Localidad': 'TextEdit', '�rea geo': 'TextEdit', 'Manzana': 'TextEdit', 'N�mero_1': 'TextEdit', 'Correo ele': 'TextEdit', 'Sitio en I': 'TextEdit', 'Tipo de es': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de i': 'TextEdit', });
lyr_BD_URB_Teleton_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Nombre de': 'no label', 'C�digo d': 'no label', 'Nombre d_1': 'no label', 'Descripcio': 'inline label - always visible', 'Tipo de vi': 'inline label - always visible', 'Nombre d_2': 'no label', 'Tipo de en': 'no label', 'Nombre d_3': 'no label', 'Tipo de _1': 'no label', 'Nombre d_4': 'inline label - always visible', 'Tipo de _2': 'no label', 'Nombre d_5': 'no label', 'N�mero e': 'no label', 'Letra exte': 'no label', 'Edificio': 'no label', 'Edificio P': 'no label', 'N�mero i': 'no label', 'Letra inte': 'no label', 'Tipo de as': 'no label', 'Nombre d_6': 'no label', 'Tipo centr': 'no label', 'Corredor i': 'no label', 'N�mero d': 'no label', 'C�digo P': 'no label', 'Clave enti': 'no label', 'Entidad fe': 'no label', 'Clave muni': 'no label', 'Municipio': 'no label', 'Clave loca': 'no label', 'Localidad': 'inline label - always visible', '�rea geo': 'no label', 'Manzana': 'no label', 'N�mero_1': 'no label', 'Correo ele': 'no label', 'Sitio en I': 'inline label - always visible', 'Tipo de es': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fecha de i': 'no label', });
lyr_BD_URB_Teleton_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});